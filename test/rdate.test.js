'use strict';

var assert = require("chai").assert;
var rdate = require("../src/rdate");
var date = new Date("09-30-1793");
var cdate = new Date("09-20-1793");

describe('rdate', function() {
  it("should have 12 months of 30 days, plus up to 6 complementary days", function() {
    assert.equal(rdate.dayNames[0].length,6);
    for(var i = 1;i<rdate.dayNames.length;i++){
      assert.equal(rdate.dayNames[i].length,30);
    }
  });

  describe('toRoman', function() {
    it("should handle positive values", function() {
      assert.equal(rdate.toRoman(999),"CMXCIX");
    });

    it("should handle negative values", function() {
      assert.equal(rdate.toRoman(-999),"-CMXCIX");
    });
  });

  describe('isLeapYear', function() {
    it("years not divisible by 4 aren't leap years", function() {
      assert.isFalse(rdate.isLeapYear(1));
    });

    it("years divisible by 4 are", function() {
      assert.isTrue(rdate.isLeapYear(4));
    });

    it("...unless it's a century year", function() {
      assert.isFalse(rdate.isLeapYear(100));
    });

    it("...unless it's every fourth century year", function() {
      assert.isTrue(rdate.isLeapYear(400));
    });
  });

  describe('getYear', function() {
    var vearly = new Date("01-02-1793");
    var vlate = new Date("10-02-1793");
    var late = new Date("09-30-1793");
    var early = new Date("09-01-1793");
    var negative = new Date("09-01-1792");
    it("should return the year, as an integer", function() {
      assert.equal(rdate.getYear(vearly),1);
    });

    it("should increment the year, when after september", function() {
      assert.equal(rdate.getYear(vlate),2);
    });

    it("should increment, when after the first day of the new year", function() {
      assert.equal(rdate.getYear(late),2);
    });

    it("should  not increment, otherwise", function() {
      assert.equal(rdate.getYear(early),1);
    });

    it("should handle negative years", function() {
      assert.equal(rdate.getYear(negative),-1);
    });
  });

  describe('getMonth', function() {
    it("should return the month, as an integer", function() {
      assert.equal(rdate.getMonth(date),1);
    });

    it("complementary days are month 0", function() {
      assert.equal(rdate.getMonth(cdate),0);
    });
  });

  describe('getMonthName', function() {
    it("should return the name of the month, as a string", function() {
      assert.equal(rdate.getMonthName(date),"Vendémiaire");
      assert.equal(rdate.getMonthName(date,"standard"),"Vendémiaire");
    });

    it("... or as an abbreviation", function() {
      assert.equal(rdate.getMonthName(date,"short"),"Vend");
    });

    it("... or as in English", function() {
      assert.equal(rdate.getMonthName(date,"english"),"Vintage");
    });
  });

  describe('getFirstDay', function() {
    it("should follow the equinox method, for extant years", function() {
      assert.equal(rdate.getFirstDay(1).getDate(),22);
      assert.equal(rdate.getFirstDay(4).getDate(),23);
      assert.equal(rdate.getFirstDay(12).getDate(),24);
    });

    it("should follow the Romme method, for future years", function() {
      assert.equal(rdate.getFirstDay(100).getDate(),22);
      assert.equal(rdate.getFirstDay(104).getDate(),23);
    });

    it("should follow the Romme method, for past years", function() {
      assert.equal(rdate.getFirstDay(-1).getDate(),23);
      assert.equal(rdate.getFirstDay(-2).getDate(),22);
    });
  });

  describe('getDay', function() {
    it("should return the day, as an integer", function() {
      assert.equal(rdate.getDay(date),9);
    });
  });

  describe('getCelebrant', function() {
    it("should return what animal, item, or plant is celebrated", function() {
      assert.equal(rdate.getCelebrant(date),"Panais");
    });

    it("...and also in english", function() {
      assert.equal(rdate.getCelebrant(date,"english"),"Parsnip");
    });
  });

  describe('getString', function() {
    it("should return an abbreviated date string", function() {
      assert.equal(rdate.getString(date,"short"),"9 Vend, II");
    });

    it("should return a verbose date string", function() {
      assert.equal(rdate.getString(date,"verbose"),"Nonidi 9 Vendémiaire, année de la République II, le jour du Panais");
    });

    it("...which should handle supplemental days", function() {
      assert.equal(rdate.getString(cdate,"verbose"),"La Fête de l'Opinion, année de la République I");
    });

    it("should return an english verbose date string", function() {
      assert.equal(rdate.getString(date,"english"),"Nonidi 9 Vendémiaire, year of the Republic II, the day of Parsnip");
    });

    it("...which should handle supplemental days", function() {
      assert.equal(rdate.getString(cdate,"english"),"Festival of Conviction, year of the Republic I");
    });

    it("should return a numeric date string", function() {
      assert.equal(rdate.getString(date,"numeric"),"9/1/2");
    });

    it("...which should handle supplemental days", function() {
      assert.equal(rdate.getString(cdate,"numeric"),"4/13/1");
    });

    it("should return a standard date string", function() {
      assert.equal(rdate.getString(date),"9 Vendémiaire, an II");
    });
  });

  describe('getObject', function() {
    it("should return an object wrapper for a date", function() {
      var obj = rdate.getObject(date);
      assert.equal(obj.month.number,1);
      assert.equal(obj.day.number,9);
      assert.equal(obj.year.number,2);
    });
  });

  it("should remember the perfidious coup of 18 Brumaire", function () {
    assert.equal((new Date("11-9-1799")).toRevolutionaryString(),"18 Brumaire, an VIII");
  });

  it("should remember the reactionary betrayal of 9 Thermidor", function () {
    assert.equal((new Date("07-27-1794")).toRevolutionaryString(),"9 Thermidor, an II");
  });

});
