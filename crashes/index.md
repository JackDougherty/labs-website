---
title: Crashes
---
# Massachusetts Crash Map
Visualize crash patterns in five regions across the state. Zoom out for a broad view of hotspots, and zoom in for street-level symbols that highlight crashes involving pedestrians, cyclists, and other vulnerable roadway users. Click on map points for more details published by the Massachusetts Department of Transportation (with additional crash data from local governments coming soon). [Explore the map in a new tab](https://picturedigits.github.io/mass-crash-map).

<div class="full-width-frame-container">
	<!-- Embedded stress map -->
	<iframe src="https://picturedigits.github.io/mass-crash-map" height="800px" allowfullscreen allow="fullscreen"></iframe>
</div>

## How We Created the Massachusetts Crash Map

[BCU Labs](https://labs.bostoncyclistsunion.org) collaborated with a team of undergraduate data science students from [Boston University Spark!](https://www.bu.edu/spark/) to make crash reports more meaningful for public use. First, the BU Spark! team wrote Python code to download and pre-process public crash data to be displayed in the map. For example, MassDOT collects crash reports filed by state and local police officers across the state, who use forms with more than 20 different labels for various types of vulnerable roadway users. We grouped these labels into three broad categories, based on their general speed:

- slow-speed vulnerable users, such as pedestrians and people in wheelchairs
- medium-speed vulnerable users, such as bicyclists, skaters, and non-motorized scooters
- higher-speed vulnerable users, such as "motorized bicyclists" (as defined by MA General Law) and "other" users who do not neatly fit into categories above (such as trolley/train passengers)

Second, the BU Spark! team created code to help us match duplicate crash reports from different data sources, based on the reported time and location. For example, if two different crash reports appeared in different sources within a short time period, but were located less than 100 meters apart, we were reasonably confident that they were duplicate reports of the same incident.

Searching for duplicates helped us understand how crash data from two different governmental sources -- [MassDOT Crash Impact database](https://apps.crashdata.dot.mass.gov/cdp/home) and the [City of Boston Vision Zero database](https://data.boston.gov/organization/vision-zero-boston-program) -- reported different numbers of crashes in Boston. When we narrowed our search to fatal crashes involving vulnerable users from 2021 to date in Boston, we found that MassDOT reported 55 incidents, while Boston Vision Zero reported 44 incidents. Looking more closely, we also found 20 fatal crashes with vulnerable users in the MassDOT data that did not appear in Boston Vision Zero, and 8 fatal crashes with vulnerable users that appeared in the Boston Vision Zero data but not in MassDOT. When combined, the MassDOT and Boston Vision Zero datasets show a total of 63 fatal crashes involving vulnerable users from 2021 to date in Boston, more than either dataset reported alone.

Learn more about data, definitions, and disclaimers in the [Map Crash Map repository on GitHub](https://github.com/Picturedigits/mass-crash-map#data).
