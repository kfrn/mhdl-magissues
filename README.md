## mhdl-pictureplay

#### Summary

A prototype webpage providing individual access to each issue of <i><a href="https://en.wikipedia.org/wiki/Picture_Play_(magazine)">Picture Play</a></i> magazine that has been scanned by the Media History Digital Library.

See it live [here](https://kfrn.github.io/mhdl-pictureplay/)!

#### Background

The [Media History Digital Library](http://mediahistoryproject.org/) is a project dedicated to digitizing historic books and magazines about film, broadcasting, and recorded sound for broad public access. The scanned materials are hosted on the [Internet Archive](http://archive.org).

For several magazines or journals, extensive runs have been scanned. Most of the scanned magazines are collected into multi-issue volumes. The MHDL site links to each volume, and the [Lantern](http://lantern.mediahist.org/) search links to individual pages, but there is no easy way to get directly to an individual issue.

That is the problem this prototype webpage is trying to solve. Metadata has been gathered which tells the filename of each issue cover, and gives the link to that page in the IA reader. Using these data, I've generated a page which provides access to individual issues of _Picture Play_ magazine.

The cover image JPEGs were generated using the scripts in [this repo](https://github.com/kfrn/mhdl-scripts).

### ⚠ Please note ⚠

* This is a prototype/proof-of-concept and not super polished!
* The cover images have been downloaded locally - they are **not** being linked from the IA bookreader.
   * While it should be possible to use the direct image link, this isn't 100% reliable as the URL is not static. It contains a server ID which may change.
      * **⮊** Figure out how to get around this!
* The cover images were obtained using the scripts in [this repo](https://github.com/kfrn/mhdl-scripts).
* There are a handful of double-ups of issues, because certain issues appear in two different bound volumes.

##### Dev notes

* Not pulling directly from [CSV]('./data/pictureplay_data_imagefiles.csv') for state: converted to JS object, + a bit of find/replace cleanup.
* **⮊** TODO: Refactor to grab image files directly from the IA reader - i.e. not using local JPEGs.
