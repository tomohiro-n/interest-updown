/// <reference path="../def/moment/moment.d.ts" />

class InterestRankUpdateEntry {
	constructor(
		private theTime : Moment,
		private theToRank : number,
		private theFromRank? : number
		) {
		this.time = theTime;
		this.toRank = theToRank;
		this.fromRank = theFromRank;
	}

	time : Moment;
	toRank : number;
	fromRank : number;
}