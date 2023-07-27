'use strict';

const collection = require('lodash/collection');
const path = require("path");
const csvWriter = require("csv-writer");

const response = {
	"challenge": {
		"id": "f19418bb-eae7-4223-8e96-a6e0a849cb07"
	},
	"companyId": "61a790f5a361e100b056c30c",
	"leaderBoardEntries": [
		{
			"userId": "61a790f6a361e100b056c310",
			"fullName": "Nick Fury",
			"score": 8307,
			"position": {
				"index": 1,
				"number": 1
			},
			"image": {
				"url": "https://images.workangel.com/wa/image/upload/h_%height%,w_%width%,%wam_img_params%/v1/test/user/user-profile/vfxxhlipa0n6u58uz5rl.%format%"
			}
		},
		{
			"userId": "61b8a7dc8db55e037f23e164",
			"fullName": "Steve Rogers",
			"score": 627,
			"position": {
				"index": 2,
				"number": 2
			},
			"image": {
				"url": "https://images.workangel.com/wa/image/upload/h_%height%,w_%width%,%wam_img_params%/v1/test/user/user-profile/esh0nffltw1c0fqdijvp.%format%"
			}
		},
		{
			"userId": "61a798c782e8024eb201e005",
			"fullName": "Wade Winston Wilson",
			"score": 0,
			"position": {
				"index": 3,
				"number": 3
			},
			"image": {
				"url": "https://images.workangel.com/wa/image/upload/h_%height%,w_%width%,%wam_img_params%/v1/test/user/user-profile/gdvkpw0twiywiuqottrf.%format%"
			}
		}
	]
}

const leaderBoardEntries = response.leaderBoardEntries;

const mappedEntries = collection.map(leaderBoardEntries, (entry) => {
	return {
		name: entry.fullName,
		score: entry.score,
		position: entry.position.number
	}
});

const companyId = response.companyId;
const challengeId = response.challenge.id;

const writer = csvWriter.createObjectCsvWriter({
	path: path.resolve(__dirname, `corporate-challenge-leaderboard-${companyId}-${challengeId}.csv`),
	header: [
		{ id: "name", title: "Name" },
		{ id: "score", title: "Score" },
		{ id: "position", title: "Position" }
	],
});

writer.writeRecords(mappedEntries).then(() => {
	console.log("Done!");
});

console.log(mappedEntries);




