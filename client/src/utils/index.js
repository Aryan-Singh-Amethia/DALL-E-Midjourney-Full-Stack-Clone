import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    // to ensure no same prompt appears twice.
    if(randomPrompt === prompt){
        return getRandomPrompt(prompt);
    }
    return randomPrompt;
}