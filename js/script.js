
preview_dict = {}
preview_dict['netflix'] = {}
preview_dict['prime'] = {}
preview_dict['hulu'] = {}
//netflix links
preview_dict['netflix']['stranger_things'] = 'https://www.netflix.com/tudum/videos/stranger-things-season-1-trailer'
preview_dict['netflix']['blacklist'] = 'https://www.youtube.com/watch?v=-WYdUaK54fU'
preview_dict['netflix']['breaking_bad'] = 'https://www.youtube.com/watch?v=HhesaQXLuRY'
preview_dict['netflix']['outer_banks'] = 'https://www.youtube.com/watch?v=pfY3j-3uQhk'
preview_dict['netflix']['vampire_diaries'] = 'https://www.youtube.com/watch?v=BmVmhjjkN4E'
preview_dict['netflix']['white_collar'] = 'https://www.youtube.com/watch?v=c5iVTy-GuJ0'
preview_dict['netflix']['british_baking'] = 'https://www.youtube.com/watch?v=Hq1LCYnTyIc'
preview_dict['netflix']['big_time_rush'] = 'https://www.youtube.com/watch?v=Mx69vSv7kG8'
preview_dict['netflix']['icarly'] = 'https://www.youtube.com/watch?v=UZPdQyXl-Lo'
//hulu links 
preview_dict['hulu']['adventure_time'] = 'https://www.youtube.com/watch?v=DEgG-SfV_ko'
preview_dict['hulu']['american_horror_story'] = 'https://www.youtube.com/watch?v=nLJR2twdK00'
preview_dict['hulu']['criminal_minds'] = 'https://www.youtube.com/watch?v=XJAjw42JjZs'
preview_dict['hulu']['glee'] = 'https://www.youtube.com/watch?v=fLwB0TEbFAc'
preview_dict['hulu']['greys_anatomy'] = 'https://www.youtube.com/watch?v=icXooBKhelc'
preview_dict['hulu']['himym'] = 'https://www.youtube.com/watch?v=aJtVL2_fA5w'
preview_dict['hulu']['kitchen_nightmares'] = 'https://www.youtube.com/watch?v=CoEeEtf8JxQ'
preview_dict['hulu']['one_tree_hill'] = 'https://www.youtube.com/watch?v=0201gxf2HNc'
preview_dict['hulu']['simpsons'] = 'https://www.youtube.com/watch?v=XPG0MqIcby8'
//prime links
preview_dict['prime']['clifford'] = 'https://www.youtube.com/watch?v=4zH5iYM4wJo'
preview_dict['prime']['dora'] = 'https://www.youtube.com/watch?v=HsDhQJ-YqG8'
preview_dict['prime']['friday_night_lights'] = 'https://www.youtube.com/watch?v=O-mI9GajrBc'
preview_dict['prime']['hunger_games'] = 'https://www.youtube.com/watch?v=GWU-xLViib0'
preview_dict['prime']['manifest'] =  'https://www.youtube.com/watch?v=I1hNAIzkQWY'
preview_dict['prime']['psych'] = 'https://www.youtube.com/watch?v=gi6Ox__CCo8'
preview_dict['prime']['spongebob'] = 'https://www.youtube.com/watch?v=fqbEaLOvNds'
preview_dict['prime']['suits'] = 'https://www.youtube.com/watch?v=85z53bAebsI'
preview_dict['prime']['teen_wolf'] = 'https://www.youtube.com/watch?v=yhPVYntw35o'

ratings_dict = {}
ratings_dict['netflix'] = {}
ratings_dict['prime'] = {}
ratings_dict['hulu'] = {}
//netflix
ratings_dict['netflix']['stranger_things'] = 8.7
ratings_dict['netflix']['blacklist'] = 8
ratings_dict['netflix']['breaking_bad'] = 9.5
ratings_dict['netflix']['outer_banks'] = 7.6
ratings_dict['netflix']['vampire_diaries'] = 7.7
ratings_dict['netflix']['white_collar'] = 8.3
ratings_dict['netflix']['british_baking'] = 8.6
ratings_dict['netflix']['big_time_rush'] = 6.4
ratings_dict['netflix']['icarly'] = 6.7
//prime
ratings_dict['prime']['clifford'] = 5.9
ratings_dict['prime']['dora'] = 4.2
ratings_dict['prime']['friday_night_lights'] = 8.7
ratings_dict['prime']['hunger_games'] = 7.2
ratings_dict['prime']['manifest'] =  7.1
ratings_dict['prime']['psych'] = 8.4
ratings_dict['prime']['spongebob'] = 8.2
ratings_dict['prime']['suits'] = 8.5
ratings_dict['prime']['teen_wolf'] = 7.7
//hulu
ratings_dict['hulu']['adventure_time'] = 8.6
ratings_dict['hulu']['american_horror_story'] = 8.0
ratings_dict['hulu']['criminal_minds'] = 8.1
ratings_dict['hulu']['glee'] = 6.8
ratings_dict['hulu']['greys_anatomy'] = 7.6
ratings_dict['hulu']['himym'] = 8.3
ratings_dict['hulu']['kitchen_nightmares'] = 7.5
ratings_dict['hulu']['one_tree_hill'] = 7.8
ratings_dict['hulu']['simpsons'] = 8.7


function clickinner(target) { // Target refers to the clicked element
    console.log("in function");
    console.log(target);
    location_string = String(target) + '.html'
    console.log(location_string);
    location.href = location_string;
};

function playPreview(platform,target){
    console.log("in function");
    url = preview_dict[platform][target];
    window.open(url, '_blank');
}

var clicked = false
function viewPlot(target){
    clicked = !clicked
    console.log("in function");
    if(clicked == true){
        document.getElementById("overlay").style.visibility="visible";
    }
    else{
        document.getElementById("overlay").style.visibility="hidden";
    }
}

function reset_order(platform){
    for(item in preview_dict[platform]){
        console.log(preview_dict[item][0]);
        document.getElementById(preview_dict[item][0]).style.order=0;
    }
}

var ordered = false
function order_ratings(platform){
    console.log(ordered);
    if(ordered == false){
    console.log(document.getElementsByClassName('rating_order'));
    document.getElementsByClassName('rating_order')[0].textContent="Ordered: Highest to Lowest Rating";
    document.getElementsByClassName('rating_order')[0].style.color = "white";
    let sortable = [];
    for (var show in ratings_dict[platform]) {
        sortable.push([show, ratings_dict[platform][show]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
        count = 0;
        for(item in sortable){
            document.getElementById(sortable[item][0]).style.order=count;
            count += 1;
        }
    }
    else{
        document.getElementsByClassName('rating_order')[0].textContent="Order from Highest to Lowest Rating";
        document.getElementsByClassName('rating_order')[0].style.color = "rgb(223, 113, 113)";
        for(item in preview_dict[platform]){
            console.log(item);
            document.getElementById(item).style.order=0;
        }
    }
    ordered = !ordered;
}

//stranger things: 
// When Joyce's 12-year-old son Will goes missing, she launches a terrifying investigation 
// into his disappearance with local authorities. As they search for answers, they unravel a 
// series of extraordinary mysteries involving secret government experiments, unnerving supernatural 
// forces and a very unusual little girl.

//The blacklist: 
// A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, 
// Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.

//Breaking bad: 
// The mishaps of two drug dealers trying to survive in the complicated and corrupted world of crime, 
// leading them from the point of working for money to working to survive; all starting with an honest 
// high school teacher trying to make money for his family after finding out cancer hadn't left him much time.

//Outer Banks: 
// The show follows a group of Pogue teenagers who live at The Cut, and are determined to find out 
// what happened to the missing father of the group's ringleader, John B. Along the way, they discover
// a legendary treasure that is tied to John B's father.

//Vampire Diaries: 
// The series is set in the fictional town of Mystic Falls, Virginia, a town charged with supernatural history. 
// It follows the life of Elena Gilbert (Nina Dobrev), a teenage girl who has just lost both parents in a car accident, 
// as she falls in love with a 162-year-old vampire named Stefan Salvatore (Paul Wesley).

//White collar: 
// A white-collar criminal agrees to help the FBI catch other white-collar criminals using his expertise as 
// an art and securities thief, counterfeiter, and conman. The unlikely partnership between charming con 
// artist Neal Caffrey and straight-man FBI agent Peter Burke.

//The great british baking show:
// Bakers attempt three challenges each week trying to impress the judges enough to go through to the next 
// round and eventually are crowned Britain's best amateur baker. A group of British home bakers are convened 
// for a baking competition.

//Big time rush: 
// Four hockey players from Minnesota aspire to become a boyband. Kendall, Logan, Carlos, and James embark on a 
// life-changing journey and face challenges along the way. Four hockey players from Minnesota aspire to become a boyband.

//ICarly: 
// When Carly and her best friend Sam improvise comedy at a school talent show audition, tech-savvy Freddie records 
// it and posts it online without informing them. After seeing the girls' strong chemistry and banter, 
// the online audience clamors for more, and thus they decide to create iCarly.

//Hulu
//Adventure time:
// Twelve-year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, 
// Finn roams the Land of Ooo righting wrongs and battling evil. Usually that evil comes in the form of the Ice King, 
// who is in search of a wife.

//American horror story: 
// The first season is about a haunted house and the family that has moved into it. 
// The second season centers around an insane asylum and a man who is wrongly accused of murdering several women, 
// including his wife. The third season tells the story of a coven of witches trying to figure out who their new "supreme" is.

//Criminal minds: 
// It follows a group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU), 
// using behavioral analysis and profiling to investigate crimes and find the unsub (unknown subject), 
// the team's term for perpetrators.

//Glee:
// A group of ambitious misfits try to escape the harsh realities of high school by joining a glee club 
// headed by a passionate Spanish teacher. When high school Spanish teacher Will Schuester (Matthew Morrison) 
// becomes the director of the school's failing Glee club, New Directions, he hopes to be able to rejuvenate it.

//Grey's anatomy:
// A medical based drama centered around Meredith Grey, an aspiring surgeon and daughter of one of the best surgeons, 
// Dr. Ellis Grey. Throughout the series, Meredith goes through professional and personal challenges along with 
// fellow surgeons at Seattle Grace Hospital.

//How I Met Your mother: 
// The series follows the adventures of Ted Mosby (played by Josh Radnor) and his love life as a single man. 
// His stories are narrated by Bob Saget as Ted Mosby 25 years later as he tells them to his adolescent children.

//Kitchen Nightmares: 
// Kitchen Nightmares is an American reality television series formerly broadcast on the Fox network, 
// in which chef Gordon Ramsay is invited by the owners to spend a week with a failing restaurant 
// in an attempt to revive the business.

//One tree hill: 
// The show is set in the fictional town of Tree Hill in North Carolina and initially follows 
// the lives of two half-brothers, Lucas Scott (Chad Michael Murray) and Nathan Scott (James Lafferty),
// who compete for positions on their school's basketball team, and the drama that ensues from the brothers' romances.

//Simpsons: 
// Animated primetime series that follows the exploits of a hapless and semi-dysfunctional nuclear 
// family named the Simpsons, who live in the fictional town of Springfield, whose various inhabitants 
// add to the comedy, angst, satire, and parody of this series. The Simpsons are a dysfunctional family living in Springfield.


//Prime Video
//Clifford: 
// When Emily Elizabeth meets a magical animal rescuer who gives her a little red puppy, 
// she never anticipated waking up to find a giant, 10-foot hound in her small New York City apartment. 
// With her single mother away on business, Emily and her fun but impulsive uncle set out on an 
// adventure that takes a bite out of the Big Apple.

//Dora: 
// "Dora the Explorer" features the adventures of young Dora, her monkey Boots, Backpack 
// and other animated friends. In each episode, viewers join Dora on an adventure in an animated 
// world set inside a computer. The titular character seeks viewers' help in solving a puzzle or 
// mystery she faces in each episode.

//Friday Night Lights: 
// A small, turbulent town in Texas obsesses over their high school football team to an unhealthy 
// degree. When the star tailback, Boobie Miles (Derek Luke), is seriously injured during the first 
// game of the season, all hope is lost, and the town's dormant social problems begin to flare up. 
// It is left to the inspiring abilities of new coach Gary Gaines (Billy Bob Thornton) to instill 
// in the other team members -- and, by proxy, the town itself -- a sense of self-respect and honor.

//Hunger Games:
// In what was once North America, the Capitol of Panem maintains its hold on its 12 
// districts by forcing them each to select a boy and a girl, called Tributes, to 
// compete in a nationally televised event called the Hunger Games. Every citizen 
// must watch as the youths fight to the death until only one remains. District 12 
// Tribute Katniss Everdeen (Jennifer Lawrence) has little to rely on, other than 
// her hunting skills and sharp instincts, in an arena where she must weigh survival against love.

//Manifest: 
// Manifest is an American supernatural drama television series created by Jeff Rake that 
// premiered on September 24, 2018, on NBC. It centers on the passengers and crew of a commercial 
// airliner who suddenly reappear after being presumed dead for five and a half years.

//Psych: 
// When a novice sleuth convinces the police he has psychic powers, 
// he and his reluctant best friend are hired on as consultants to help solve complicated cases. 
// Think you are psychic? Shawn Spencer (James Roday) makes his living pretending to be.

//Spongebob: 
// The misadventures of a talking sea sponge who works at a fast food restaurant, 
// attends a boating school, and lives in an underwater pineapple. The character-driven 
// cartoon chronicles the nautical and often nonsensical adventures of SpongeBob, 
// an incurably optimistic and earnest sea sponge, and his underwater friends.

//Suits: 
// Set at a fictional New York City law firm, it follows Mike Ross (Patrick J. Adams), 
// who uses his eidetic memory to talk his way into a job as an associate working for 
// successful closer Harvey Specter (Gabriel Macht), despite being a college dropout who never attended law school.

//Teen Wolf: 
// High school student Scott McCall gets bitten by a werewolf and has his whole life turned around. 
// With his best friend Stiles Stilinski by his side they work through these changes and help save 
// beacon hills from various different supernatural threats.


