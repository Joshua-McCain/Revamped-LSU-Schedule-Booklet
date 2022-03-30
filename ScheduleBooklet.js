//Dustin Wleczyk
//Maggie Stewart
//Olivia Cheung
//Joshua McCain
//Serene Sam
//Steven Seiden

class ClassConstruct {

    #number = null;
    #section = null;
    #type = null;
    #title = null;
    #hours = null;
    #startTime = null;
    #endTime = null;
    #days = null;
    #professor = null;
    #available = null;
    #size = null;
    #building = null;
    #room = null;
    #flags = null;
    #lab = null;
    #labStartTime = null;
    #labEndTime = null;
    #labDays = null;
    #startTimeHours=null;
    #startTimeMinutes=null;
    #endTimeHours=null;
    #endTimeMinutes=null;

    static ClassBuilder = class {
        #number = null;
        #section = null;
        #type = null;
        #title = null;
        #hours = null;
        #startTime = null;
        #endTime = null;
        #days = null;
        #professor = null;
        #available = null;
        #size = null;
        #building = null;
        #room = null;
        #flags = null;
        #lab = null;
        #labStartTime = null;
        #labEndTime = null;
        #labDays = null;
        #startTimeHours=null;
        #startTimeMinutes=null;
        #endTimeHours=null;
        #endTimeMinutes=null;

        setNumber(number){
            this.#number = number;
            return this;
        }

        setSection(section){
            this.#section = section;
            return this;
        }

        setType(type){
            this.#type = type;
            return this;
        }

        setTitle(title){
            this.#title = title;
            return this;
        }

        setHours(hours){
            this.#hours = hours;
            return this;
        }

        setStartTime(startTime){
            this.#startTime = startTime;
            return this;
        }

        setEndTime(endTime){
            this.#endTime = endTime;
            return this;
        }

        setDays(days){
            this.#days = days;
            return this;
        }

        setProfessor(professor){
            this.#professor = professor;
            return this;
        }

        setAvailable(available){
            this.#available = available;
            return this;
        }

        setSize(size){
            this.#size = size;
            return this;
        }

        setBuilding(building){
            this.#building = building;
            return this;
        }

        setRoom(room){
            this.#room = room;
            return this;
        }

        setFlags(flags){
            this.#flags = flags;
            return this;
        }

        setLab(lab){
            this.#lab = lab;
            return this;
        }

        setLabStartTime(labStartTime){
            this.#labStartTime = labStartTime;
            return this;
        }

        setLabEndTime(labEndTime){
            this.#labEndTime = labEndTime;
            return this;
        }

        setLabDays(labDays){
            this.#labDays = labDays;
            return this;
        }

        setStartTimeHours(startTimeHours){
            this.#startTimeHours=startTimeHours;
            return this;
        }

        setStartTimeMinutes(startTimeMinutes){
            this.#startTimeMinutes=startTimeMinutes;
            return this;
        }

        setEndTimeHours(endTimeHours){
            this.#endTimeHours=endTimeHours;
        }

        setEndTimeMinutes(endTimeMinutes){
            this.#endTimeMinutes=endTimeMinutes;
        }

        build() {
            const course = new ClassConstruct(
                this.#number,
                this.#section,
                this.#type,
                this.#title,
                this.#hours,
                this.#startTime,
                this.#endTime,
                this.#days,
                this.#professor,
                this.#available,
                this.#size,
                this.#building,
                this.#room,
                this.#flags,
                this.#lab,
                this.#labStartTime,
                this.#labEndTime,
                this.#labDays,
                this.#startTimeHours,
                this.#startTimeMinutes,
                this.#endTimeHours,
                this.#endTimeMinutes)
            return course
        }
    }

    constructor(number, section, type, title, hours, startTime, endTime, days, professor, available, size, building, room,
                flags, lab, labStart, labEnd, labDays, startTimeHours, startTimeMinutes,endTimeHours,endTimeMinutes){
        this.#number = number;
        this.#section = section;
        this.#type = type;
        this.#title = title;
        this.#hours = hours;
        this.#startTime = startTime;
        this.#endTime = endTime;
        this.#days = days;
        this.#professor = professor;
        this.#available = available;
        this.#size = size;
        this.#building = building;
        this.#room = room;
        this.#flags = flags;
        this.#lab = lab;
        this.#labStartTime = labStart;
        this.#labEndTime = labEnd;
        this.#labDays = labDays;
        this.#startTimeHours = startTimeHours;
        this.#startTimeMinutes = startTimeMinutes;
        this.#endTimeHours = endTimeHours;
        this.#startTimeMinutes = endTimeMinutes;
    }

    sendAvailable() {
        return this.#available;
    }

    sendDays() {
        return this.#days;
    }

    sendFlags() {
        return this.#flags
    }
}

class ClassAggregation {
    /*
    * This constructor should take in the courses previously imported from the XML file and fill the both array
    * members with the data.
    */
    constructor(){
        this.courseSelection = [];
        this.filteredCourseSelection = [];
        this.profSelection = [];
    }

    Run () {
        return true;
    }

    /*
     * Loads the xml file that the function is called with so that any xml file from LSU booklet can be used.
     * In the if statement, calling the fill course selection lets us fill our array when the file is ready.
     */
    loadXMLFile(xmlFileName){
        let httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("test").innerHTML = this.responseText;
                this.fillCourseSelection(xmlFileName);
            }
        };
        httpReq.open("GET", xmlFileName, true);
        httpReq.send();
    }

    fillCourseSelection(xmlFileName) {
        //Set up XML file to be read
        let xmlFile = xmlFileName.responseXML;
        //Get row tags so that each course can be filled individually
        let rowTags = xmlFile.getElementsByTagName("Row");


        for (let i = 0; i < rowTags.length; i++) {

            let cellTags = rowTags[i].getElementsByTagName("Cell");

            let tempCourse = new ClassConstruct.ClassBuilder();

            if (cellTags[0].getElementsByTagName("Data")[0].getAttribute("ss.Type") === "Number"
                || cellTags[0].getElementsByTagName("Data")[0].innerText === "(F)"
                || cellTags[0].getElementsByTagName("Data")[0].innerText === "(H)") {

                tempCourse = tempCourse.setAvailable(cellTags[0].getElementsByTagName("Data")[0].innerText)
                    .setSize(cellTags[1].getElementsByTagName("Data")[0].innerText)
                    .setNumber(cellTags[3].getElementsByTagName("Data")[0].innerText);

                if (cellTags[4].querySelector("Data") != null)
                    tempCourse = tempCourse.setType(cellTags[4].getElementsByTagName("Data")[0].innerText);

                tempCourse = tempCourse.setSection(cellTags[5].getElementsByTagName("Data")[0].innerText)
                    .setTitle(cellTags[6].getElementsByTagName("Data")[0].innerText)
                    .setHours(cellTags[7].getElementsByTagName("Data")[0].innerText);

                if (cellTags[8].getElementsByTagName("Data")[0].innerText !== "TBA") {

                    //Set times
                    const timeArray = cellTags[8].getElementsByTagName("Data")[0].innerText.split("-");
                    const startTimer=tempCourse.setStartTimeHours(timeArray[0].slice(0,timeArray[0].length-2))
                        .setStartTimeMinutes(timeArray[0].slice(timeArray[0].length-2,timeArray[0].length));
                    const endTimer=tempCourse.setEndTimeHours(timeArray[1].slice(0,timeArray[1].length-2))
                        .setEndTimeMinutes(timeArray[1].slice(timeArray[1].length-2,timeArray[1].length));
                    tempCourse = tempCourse.setStartTime(timeArray[0]).setStartTimeHours(startTimer[0])
                        .setStartTimeMinutes(startTimer[1]).setEndTimeHours(endTimer[0]).setEndTimeMinutes(endTimer[1])
                        .setDays(cellTags[9].getElementsByTagName("Data")[0].innerText);

                    //If it has a room, get the room and building
                    if (cellTags[10].querySelector("Data") != null)
                        tempCourse = tempCourse.setRoom(cellTags[10].getElementsByTagName("Data")[0].innerText)
                            .setBuilding(cellTags[11].getElementsByTagName("Data")[0].innerText);

                } else
                    tempCourse = tempCourse.setStartTime("TBA").setEndTime("TBA");

                //Get special tags when applicable
                if (cellTags[12].querySelector("Data") != null)
                    tempCourse = tempCourse.setFlags(cellTags[12].getElementsByTagName("Data")[0].innerText);

                //Get professor when applicable
                if (cellTags[13].querySelector("Data") != null) {
                    tempCourse = tempCourse.setProfessor(cellTags[13].getElementsByTagName("Data")[0].innerText);
                    //Add unique professors to a list for frontend to display
                    if (!this.profSelection.contains(cellTags[13].getElementsByTagName("Data")[0].innerText))
                        this.profSelection.push(cellTags[13].getElementsByTagName("Data")[0].innerText);
                }

                //Check to see if the class has a lab and fill out its info if so
                if (i + 1 < rowTags.length && rowTags[i + 1].getElementsByTagName("Data")[0].innerText === "LAB") {
                    tempCourse = tempCourse.setLab(true);

                    //Set times by splitting the "-" if not TBA
                    if (rowTags[i + 1].getElementsByTagName("Data")[1].innerText !== "TBA") {
                        const labTimeArray = rowTags[i + 1].getElementsByTagName("Data")[1].innerText.split("-");
                        tempCourse = tempCourse.setLabStartTime(labTimeArray[0]).setLabEndTime(labTimeArray[1])
                            .setLabDays(rowTags[i + 1].getElementsByTagName("Data")[2].innerText);
                    } else {
                        tempCourse = tempCourse.setLabStartTime("TBA").setLabEndTime("TBA");
                    }
                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }

                this.courseSelection.push(tempCourse.build());
            }
        }

        this.filteredCourseSelection = this.filteredCourseSelection.concat(this.courseSelection);
            /*
            //Get each Data tag for the row we are working on
            let dataTags = rowTags[i].getElementsByTagName("Data");

            //For each row, if the first data tag is a number or "(F)", we know it is a class we want to extract from
            //If it doesn't follow this rule, for this project, we should just ignore it.
            if (dataTags[0].getAttribute("ss.Type") === "Number" || dataTags[0].innerText === "(F)") {

                let tempCourse = new ClassConstruct.ClassBuilder();

                //All courses have the same 4 starting data tag formats, selecting correct data tag positions
                tempCourse.setAvailable(dataTags[0].innerText)
                          .setSize(dataTags[1].innerText)
                          .setNumber(dataTags[3].innerText);

                //This if statement will split the classes into groups based on the class type, which seems to
                //be a deciding factor in how a class in structured in the booklet.
                if (dataTags[4].getAttribute("ss.Type") === "Number"){
                   tempCourse.setSection(dataTags[4].innerText)
                             .setTitle(dataTags[5].innerText)
                             .setHours(dataTags[6].innerText);
                }
                else if (dataTags[4].innerText === "RES" || dataTags[4].innerText === "IND") {

                }

                //Checks to see if the next row exists, and if it does, is it a lab row? (aka first value is "LAB")
                if (i + 1 < rowTags.length && rowTags[i + 1].getElementsByTagName("Data")[0].innerText === "LAB") {

                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }

            }*/
    }

    //sorting using the hours
    filterStartTime(startTime,endTime)
    {
        const hours=startTime.slice(0,startTime.length-2);
        const minutes=startTime.slice(startTime.length-2,startTime.length);
        if(!endTime.includes('N')&&startTime>430)
        {
            hours.sort();
        }
        else if(startTime<430)
        {
            hours.sort();
        }
        else if(endTime.includes('N')&&startTime>430)
        {
            hours.sort();
        }
    }

    filterDays(days)
    {
        let daysArray = days.sendDays().split(/(\s+)/);

        for (var i = 0; i < daysArray; i++) {
            switch(daysArray[i]) {
                case "M":
                    return true;
                    break;
                case "T":
                    return true;
                    break;
                case "W":
                    return true;
                    break;
                case "TH":
                    return true;
                    break;
                case "F":
                    return true;
                    break;
                case "S":
                    return true;
                    break;
                case "MTWTFS":
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        }
    }

    filterProfessor(professorWanted)
    {
        if(professor == professorWanted){
            return true;
        }
    }

    /* I am putting the original code here so we don't lose all the flags we could theoretically sort by.
    * filterCIFlag(flags){
        if(flags == "100% WEB BASED") {
            return true;
        } else if (flags == "PERMIS OF DEPT"){
            return true;
        } else if (flags == "PERMIS OF INST"){
            return true;
        } else if (flags.substring(0, 3) == "C-I"){
            return true;
        } else if (flags.substring(0, 8) == "RES COLG") {
            return true;
        } else if (flags == "SVC LEARNING") {
            return true;
        } else if (flags == "MAJORS ONLY") {
            return true;
        } else if (flags == "NON-MAJORS ONLY") {
            return true;
        } else if (flags == "AUDITION REQ'D") {
            return true;
        } else if (flags == "AFFORDABLE EDUC") {
            return true;
        } else if (flags == "OPEN EDUCATIONA") {
            return true;
        } else if (flags == "100% WEB BASED"){
            return true;
        } else if (flags == "75-99% WEB BASE"){
            return true;
        } else if (flags == "50-74% WEB BASE"){
            return true;
        } else if (flags == "1-49% WEB BASED"){
            return true;
        }
    }*/

    filterCIFlag(course){
        return course.sendFlags.slice(0,2) === "C-I";
    }

    filterWEBFlag(course){
        return course.sendFlags === "100% WEB BASED" || course.sendFlags === "75-99% WEB BASE"
            || course.sendFlags === "50-74% WEB BASE" || course.sendFlags === "1-49% WEB BASED";
        }


    //a method for filtering availability, it is called in the sortCourses method
    filterAvailable(available){
        //Hiding items that are full or on hold, aka only sending numbers back because those are available
        return !(available.sendAvailable() === "(F)" || available.sendAvailable() === "(H)");

    }

    /*
    * For this method, parameters will either be passed as:
    * 1) null: meaning we don't want to filter/sort by that parameter.
    * 2) some other meaningful value (TBD what that value is for each filter): will pass the if statement and
    * sort accordingly.
    * */
    sortCourses(startTime, days, professor, available, CIflag, WEBflag) {
        this.filteredCourseSelection = [].concat(this.courseSelection);

        if (startTime != null){
            this.filterStartTime();
        }

        if (days != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterDays);
        }

        if (professor != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterProfessor);
        }

        if (available != null) {
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterAvailable);
        }

        if (CIflag != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterCIFlag);
        }

        if (WEBflag != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterWEBFlag);
        }

        return this.filteredCourseSelection;
    }

    sendCourses(){
        return this.filteredCourseSelection;
    }

    sendProfessors(){
        for(let i; i < this.courseSelection.length; i++)
        {
            if(this.filterProfessor())
            {
                return this.courseSelection(this.filterProfessor());
            }
        }
    }
}


class PopupBox {
    //shows the popup box
    Run () {
        return true;
    }

    ShowBox () {
        return true;
    }
}

class SchedulePlanner extends PopupBox {
    //Take user input
}

class HelpfulLinks extends PopupBox {
    Run () {
        return ["link1","link2"];
    }
}

class Display {
    /*
    * displays the schedule booklet and such
    * Also entails the constant updating of the information being displayed on screen, such as updated classes
    */
    Run () {
        //These are examples of the types of search bars and pop-up windows we will instantiate
        let availabilitySearch = new SearchBar;
        let schedulePlannerBox = new SchedulePlanner();
        let helpfulLinks = new HelpfulLinks();
        return true;
    }
}


class SearchBar {
    Run () {
        return true;
    }

    Search(){
        objClassAgg.sortCourses(null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,
            null,null);
    }
}

let objClassAgg = new ClassAggregation();

objClassAgg.loadXMLFile("csc.xml");

let websiteDisplay = new Display();

websiteDisplay.Run();
