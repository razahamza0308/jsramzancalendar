var input = +prompt("Enter Roza Here:");

var roza = ["","1st ROZA", "2nd ROZA", "3rd ROZA", "4th ROZA", "5th ROZA", "6th ROZA", "7th ROZA", "8th ROZA", "9th ROZA",
    "10th ROZA", "11th ROZA", "12th ROZA", "13th ROZA", "14th ROZA", "15th ROZA", "16th ROZA", "17th ROZA", "18th ROZA",
    "19th ROZA", "20th ROZA", "21th ROZA", "22th ROZA", "23th ROZA", "24th ROZA", "25th ROZA", "26th ROZA", "27th ROZA",
    "28th ROZA", "29th ROZA", "30th ROZA"];

var sehrTime = ["","4:52 AM", "4:51 AM", "4:50 AM", "4:49 AM", "4:48 AM", "4:47 AM", "4:48 AM", "4:46 AM",
    "4:45 AM", "4:44 AM", "4:43 AM", "4:42 AM", "4:41 AM", "4:40 AM", "4:39 AM", "4:38 AM", "4:38 AM", "4:37 AM",
    "4:36 AM", "4:35 AM", "4:34 AM", "4:33 AM", "4:32 AM", "4:31 AM", "4:30 AM", "4:29 AM", "4:28 AM", "4:27 AM",
    "4:26 AM", "4:25 AM", "4:24 AM"];

var iftarTime = ["","6:55 PM", "6:55 PM", "6:56 PM", "6:56 PM", "6:57 PM", "6:57 PM", "6:57 PM", "6:58 PM",
    "6:58 PM", "6:59 PM", "6:59 PM", "7:00 PM", "7:00 PM", "7:01 PM", "7:01 PM", "7:02 PM", "7:02 PM", "7:03 PM",
    "7:03 PM", "7:04 PM", "7:04 PM", "7:05 PM", "7:05 PM", "7:06 PM", "7:06 PM", "7:07 PM", "7:07 PM", "7:08 PM",
    "7:08 PM", "7:09 PM"];

document.write("<h1>" + roza[input] + "<h1/>" + "<h3>" + "Sehr time " + sehrTime[input] + "<h3/>" + "<h3>" + "Iftar Time is " + iftarTime[input] + "<h3/>")

