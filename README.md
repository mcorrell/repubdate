# repubdate

A package to allow Javscript Date objects to report the date in the style of the [French Republican Calendar](https://en.wikipedia.org/wiki/French_Republican_Calendar). The calendar was active for only twelve years, from 1793-1805, and it is unclear how it was meant to be extended to the current day. We use the [Romme System](https://en.wikipedia.org/wiki/French_Republican_Calendar#Converting_from_the_Gregorian_Calendar) to calculate the date for years outside of the bounds of the extant use of the calendar.

## Installation ##

Install using `npm`:

$ npm install repubdate

## Usage ##

repubdate creates a method, `toRevolutionaryString`, in the standard javascript Date object.

```javascript
require('repubdate');
var napoleoncoup = new Date("11-9-1799");
console.log(napoleoncoup.toRevolutionaryString());
//outputs "18 Brumaire, an VIII
```

`toRevolutionaryString` can take an optional `mode` parameter, for other formats.

`short` uses short names for the months.

```javascript
require('repubdate');
var napoleoncoup = new Date("11-9-1799");
console.log(napoleoncoup.toRevolutionaryString("short"));
//outputs "18 Bru, VIII"
```

`verbose` uses the full name, includes the name of the day within the Décade, as well as the item, animal, or plant that is to be celebrated on that day.

```javascript
require('repubdate');
var napoleoncoup = new Date("11-9-1799");
console.log(napoleoncoup.toRevolutionaryString("verbose"));
//outputs "Octidi 18 Brumaire, année de la République VIII, le jour du Dentelaire"
```

`english` is the verbose string, but in English rather than French.

```javascript
require('repubdate');
var napoleoncoup = new Date("11-9-1799");
console.log(napoleoncoup.toRevolutionaryString("english"));
//outputs "Octidi 18 Brumaire, year of the Republic VIII, the day of the Leadworts"
```

`numeric` is a short version in DD/MM/YY format.

```javascript
require('repubdate');
var napoleoncoup = new Date("11-9-1799");
console.log(napoleoncoup.toRevolutionaryString("numeric"));
//outputs "18/2/8"
```
