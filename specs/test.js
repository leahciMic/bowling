var BowlingGame = require('../bowling.js'),
    expect = require('expect.js');

describe('Bowling score card', function() {
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
    });

    it('should not allow illegal moves', function() {
        expect(bowlingGame.roll.bind(bowlingGame, -1)).to.throwException(/Illegal move\./);
        expect(bowlingGame.roll.bind(bowlingGame, 11)).to.throwException(/Illegal move\./);
    });

    it('should allow possible moves', function() {
        expect(bowlingGame.roll.bind(bowlingGame, 2)).to.not.throwException();
    });

    it('should score a simple game', function() {
        bowlingGame.roll(2);
        bowlingGame.roll(5);

        expect(bowlingGame.score()).to.equal(7);
    });

    it('should score a spare correctly', function() {
        bowlingGame.roll(2);
        bowlingGame.roll(8);
        bowlingGame.roll(5);
        bowlingGame.roll(2);

        expect(bowlingGame.score()).to.equal(22);
    });

    it('should score a strike correctly', function() {
        bowlingGame.roll(10);
        bowlingGame.roll(5);
        bowlingGame.roll(5);

        expect(bowlingGame.score()).to.equal(30);
    });

    it('should score a few strikes/spares correctly', function() {
        bowlingGame.roll(10);
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        bowlingGame.roll(10);
        bowlingGame.roll(2);
        bowlingGame.roll(0);
        bowlingGame.roll(5);
        bowlingGame.roll(3);
        bowlingGame.roll(8);
        bowlingGame.roll(2);
        bowlingGame.roll(10);
        bowlingGame.roll(3);
        bowlingGame.roll(4);

        expect(bowlingGame.score()).to.equal(106);
    });

    it('should score strikes correctly', function() {
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(10);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(30);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(60);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(90);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(120);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(150);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(180);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(210);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(240);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(270);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(290);
        bowlingGame.roll(10);
        expect(bowlingGame.score()).to.equal(300);
    });

    it('should score 10th frame correctly', function() {
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(0);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);

        expect(bowlingGame.score()).to.equal(30);
    });

    it('should score a random game', function() {
        bowlingGame.roll(4);
        bowlingGame.roll(3);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(7);
        bowlingGame.roll(9);
        bowlingGame.roll(1);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        bowlingGame.roll(4);
        bowlingGame.roll(6);
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        bowlingGame.roll(10);

        expect(bowlingGame.score()).to.equal(145);
    });

    it('should score a perfect game', function() {
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(10);

        expect(bowlingGame.score()).to.equal(300);
    });
});