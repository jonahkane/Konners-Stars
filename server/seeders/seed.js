const db = require('../config/connection');
const { User, Session } = require('../models');
const userSeeds = require('./userSeeds.json');
const sessionSeeds = require('./sessionSeeds.json');

db.once('open', async () => {
  try {
    await Session.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < sessionSeeds.length; i++) {
      const { _id, sessionAuthor } = await Session.create(sessionSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: sessionAuthor },
        {
          $addToSet: {
            sessions: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
