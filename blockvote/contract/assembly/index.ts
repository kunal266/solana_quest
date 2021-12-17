
import { PersistentMap, logging, PersistentDeque } from 'near-sdk-as'
const CandidateURL = new PersistentMap<string,string>("CandidateURL");
const CandidatePair = new PersistentMap<string,string[]>("Candidate Pair");
const PromptArray = new PersistentMap<string,string[]>("array of prompts");
const VoteArray = new PersistentMap<string,string[]>("Stores Votes");
const userParticipation = new PersistentMap<string,string[]>("user participation revord");


// Exported functions will be part of the public interface for your smart contract.
// Feel free to extract behavior to non-exported functions!
//the following method is view method
export function getUrl(name:string):string{
  if (CandidateURL.contains(name)){
    return CandidateURL.getSome(name);
  }else{
    logging.log("can't find "+name);
    return ('name '+name+' not found');
  }
}
//the following method is state changing,it cost moeny and changes the state
export function addUrl(name:string,url:string):void{
  CandidateURL.set(name,url);
  logging.log('added url for '+name);
}
export function addCandidatePair(prompt:string,name1:string,name2:string):void{
  CandidatePair.set(prompt,[name1,name2])
}
export function addVote(prompt:string,index:i32):void{
  if( VoteArray.contains(prompt)){
    let tempArray=VoteArray.getSome(prompt)
    let tempVal = tempArray[index]
    let newVal = tempVal+1
    
  }
}
