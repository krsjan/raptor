
Oppgave 1:

List all Indicator groups for current ORG UNIT
User -> Select one indicator
1 graf per indicator 
Last 12 months, stolpediagram

1. List all indicator groups
http://apps.dhis2.org/demo/api/indicatorGroups/
2. choose indicator group
3. Get all indicators for each group
http://apps.dhis2.org/demo/api/indicatorGroups/oehv9EO3vP7.json
4. Get one graph per indicator
http://apps.dhis2.org/demo/api/analytics.json?dimension=dx:$INDICATOR_ID$&dimension=pe:LAST_12_MONTHS&filter=ou:$ORG_UNIT$
http://apps.dhis2.org/demo/api/analytics.json?dimension=dx:nkjlWUMIdHh&dimension=pe:LAST_12_MONTHS&filter=ou:ImspTQPwCqd
Get Graph:

------------------------------------------------------

Oppgave 2:
Org unit children
Pick indicator group, show subgroups as one
bar graph
last quarter

1. Get org unit children: {tag: children}
http://apps.dhis2.org/demo/api/organisationUnits/ImspTQPwCqd.json

2. List indicator groups

3. pick indicator group

4. Get graph for each indicator Lzg9LtG1xg3;
new:
http://apps.dhis2.org/demo/api/analytics3.json?dimension=J5jldMd8OHv:CXw2yu5fodb;EYbopBOJWsW;RXL3lPSK8oG;tDZVQ1WtwpA;uYxK4wmcPqAdimension=dx:Lzg9LtG1xg3;puykO1tbcdi;ReUHfIn0pTQ;AUqdhY4mpvp;c8fABiNpT0B;sB79w2hiLp8;Uvn6LCg7dVU;OdiHJayrsKo;dwEq7wi6nXV;Tt5TAvdfdVK;&filter=pe:LAST_QUARTER&filter=ou:ImspTQPwCqd 


http://apps.dhis2.org/demo/api/analytics.json?dimension=dx:$INDICATOR_ID$&dimension=ou:USER_ORGUNIT_CHILDREN&filter=pe:LAST_QUARTER
http://apps.dhis2.org/demo/api/analytics.json?dimension=dx:puykO1tbcdi&dimension=ou:USER_ORGUNIT_CHILDREN&filter=pe:LAST_QUARTER

------------------------------------------------------

Oppgave 3:
Proportions compares a chosen indicator based on 
organisation unit types (Hospital, tree post clinic, mobile clinic, clinic). 
Data should be represented with a pie chart.

1. List indicator groups

2. 

4. Get comparison between Org Unit Types for each indicator

http://apps.dhis2.org/demo/api/analytics.json?dimension=J5jldMd8OHv:CXw2yu5fodb;EYbopBOJWsW;RXL3lPSK8oG;tDZVQ1WtwpA;uYxK4wmcPqA&dimension=dx:Uvn6LCg7dVU&filter=ou:ImspTQPwCqd&filter=pe:LAST_QUARTER


http://apps.dhis2.org/demo/api/analytics.json?dimension=J5jldMd8OHv:tDZVQ1WtwpA&dimension=dx:joWPywO7yOJ&filter=pe:LAST_QUARTER

