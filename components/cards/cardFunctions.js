import Lead from './lead';
import Vocalist from './vocalist'
import Musician from './musician'
import Engineer from './engineer'
import Producer from './producer'
import SeshDeetz from './seshDeetz';
//responseData is just my placeholder for the values entered as responses
const newLead = [];
const newVocalist = [];
const newMusician = [];
const newEngineer = [];
const newProducer = [];
const sessionInfo = [];

function createLead(fileName, data) {
    let lead = new Lead(responseData)
    newLead.push(lead);
    console.log("Session Leader has entered the chat!");
}

function createEngineer(fileName, data) {
            let engineer = new Engineer(reponseData) 
            newEngineer.push(engineer);
            console.log("new sound bender ready for duty!!");
}

function createVocalist(fileName, data) {
    let vocalist = new Vocalist(reponseData) 
    newVocalist.push(vocalist);
    console.log("new yowler preppin to howl!!");
}

function createMusician(fileName, data) {
    let musician = new Musician(reponseData) 
    newMusician.push(musician);
    console.log("noise maker ready to make noise!!!");
}

function createProducer(fileName, data) {
    let producer = new Producer(reponseData) 
    newProducer.push(producer);
    console.log("DEEEE JAYYYY KAHILDDDDD!!");
}

function createSessionDeetz(fileName, data) {
    let seshDeetz = new SeshDeetz(reponseData) 
    sessionInfo.push(seshDeetz);
    console.log("GET YOUR ITINERARY HERE!!");
}