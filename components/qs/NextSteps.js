import React from 'react';
import MusicianQs from './MusicianQs';
import VocalistQs from './VocalistQs';
import EngineerQs from './EngineerQs';
import ProducerQs from './ProducerQs';
import FinalDeetz from './FinalDeetz';

function NextSteps() {
    const addMusician = function() {
        return (
            <div><MusicianQs /></div>
        )
    }
    const addVocalist = function() {
        return (
            <div><VocalistQs /></div>
        )
    }
    const addEngineer = function() {
        return (
            <div><EngineerQs /></div>
        )
    }
    const addProducer = function() {
        return (
            <div><ProducerQs /></div>
        )
    }
    const finalDeetz = function() {
        return (
            <div><FinalDeetz /></div>
        )
    }
  return (
    <div>
        <h3>What Would You like to do Next?</h3>
        <button onClick={addMusician}>Add a Musician!</button>
        <button onClick={addVocalist}>Add a Vocalist!</button>
        <button onClick={addEngineer}>Add an Engineer!</button>
        <button onClick={addProducer}>Add a Producer!</button>
        <button onClick={finalDeetz}>Finish Building My Session!</button>
    </div>
  );
}

export default NextSteps;