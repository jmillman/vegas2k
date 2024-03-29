import * as constants from '../constants';

export function setfootballViewDate(gamesInfo, date){
  const data = {gamesInfo, date};
  return {type: constants.SET_BET_VIEW_OPTIONS_FOOTBALL_DATE, data};
}

export function setfootballGame(game){
  return {type: constants.SET_BET_VIEW_OPTIONS_FOOTBALL_GAME, game};
}

export function setfootballGameType(betType){
  return {type: constants.SET_BET_VIEW_OPTIONS_BET_TYPE, betType};
}

export function initializeFootballGame(footballGameData){
  return {type: constants.INITIALIZE_FOOTBALL_BET_OPTIONS, footballGameData};
}

export function createBet(game, homeScore, loggedInUser, betType, price = null){
  return {type: constants.CREATE_BET, bet: {game, homeScore, betType, price}};
}

export function submitBet(bet){
  return {type: constants.SUBMIT_BET, bet};
}

export function cancelBet(){
  return {type: constants.CANCEL_BET};
}

export function submitBetResponseSuccess(response){
  return {type: constants.SUBMIT_BET_SUCCESS, response};
}

export function submitBetResponseFail(response){
  return {type: constants.SUBMIT_BET_FAIL, response};
}

export function getAllTicketsResponse(data){
  return {type: constants.GET_ALL_TICKETS_RESPONSE, data};
}

export function refreshAllTickets(){
  return {type: constants.GET_ALL_TICKETS_REQUEST};
}

export function refreshAllBets(){
  return {type: constants.GET_ALL_BETS_REQUEST};
}

export function getAllBetsResponse(data){
  return {type: constants.GET_ALL_BETS_RESPONSE, data};
}

export function refreshAllStats(){
  return {type: constants.GET_ALL_STATS_REQUEST};
}

export function getAllStatsResponse(data){
  return {type: constants.GET_ALL_STATS_RESPONSE, data};
}
