function distanceFromHqInBlocks(loc)
{
    if (loc < 42) return 42 - loc;
    else if (loc > 42) return loc - 42;
    else return 0;
}

function distanceFromHqInFeet(loc)
{
    return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(start, dest)
{
    var diff = 0;
    if (start > dest) diff = start - dest;
    else if (dest > start) diff = dest - start;
    else return 0;
    return diff * 264;
}

function calculatesFarePrice(start, dest)
{
    //console.log("start = " + start);
    //console.log("dest = " + dest);
    
    var diff = distanceTravelledInFeet(start, dest);
    
    //console.log("diff = " + diff);

    if (diff < 400 || diff == 400) return 0;
    else if (diff > 400 && diff < 2000)
    {
        return (diff - 400) * 2 / 100;
    }
    else if ((diff > 2000 || diff == 2000) && diff < 2500)
    {
        return 25;
    }
    else return "cannot travel that far";
    //NOTE: EXTREMELY BAD PRACTICE
    //IT IS BETTER TO THROW THE ERROR OR KEEP THE RETURN TYPE THE SAME
    //AND HAVE AN ERROR VALUE ASSOCIATED WITH THE ERROR
}
