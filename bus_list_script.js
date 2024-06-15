document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Bus List 1": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Annika Risinger", "Ben Shearin", "Chaius Herbst", "Evie Jenkins", "Jacob Stanfield", "Lucy Kramer", "Mae Jones", "Molly Kinzinger", "Sam Masters", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Amelia Masters", "Donny Spaulding", "Harper McGowan", "Hayden Studnicki", "Isaiah Schwoerer", "Kobi White", "Lauren Fehr", "Parker Michels", "Pierce Vrooman", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aine Staggs", "Aubrey McClure", "Daphne Yates", "Griffin Moore", "Hayley Michels", "Hunter Studnicki", "Levi Landes", "Lydia Hurd", "Maggie Hughes", "Natalie Heil", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Ashlynn Feezor", "Carl Hoefer", "Cooper White", "Evan Herbst", "Everett Woodman", "Isaiah Herbst", "Karis Wolfe", "Lizzy Henard", "Max Hudson", "Paige Kinzinger", "Raymond Hoefer", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Eliana Woodman", "Ellie Baird", "Emilynn Combs", "Grace Masters", "Hannah Spaulding", "Jacob Hughes", "Lexi Baird", "Lexi Horton", "Luke Jun", "Reagan DeHaan", "", ""] },],
"Bus List 2": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Amelia Masters", "Donny Spaulding", "Evan Herbst", "Hayden Studnicki", "Karis Wolfe", "Lexi Horton", "Molly Kinzinger", "Raymond Hoefer", "Ryan Heil", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aubrey McClure", "Ben Shearin", "Chaius Herbst", "Eliana Woodman", "Kobi White", "Lucy Kramer", "Lydia Hurd", "Mae Jones", "Natalie Heil", "Reagan DeHaan", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Daphne Yates", "Ellie Baird", "Everett Woodman", "Isaiah Schwoerer", "Jacob Stanfield", "Lizzy Henard", "Luke Jun", "Max Hudson", "Paige Kinzinger", "Parker Michels", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Addy Jeffrey", "Alyssa Thompson", "Ashlynn Feezor", "Evie Jenkins", "Hannah Spaulding", "Harper McGowan", "Hayley Michels", "Lauren Fehr", "Levi Landes", "Lexi Baird", "Pierce Vrooman", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Annika Risinger", "Carl Hoefer", "Cooper White", "Emilynn Combs", "Grace Masters", "Griffin Moore", "Hunter Studnicki", "Isaiah Herbst", "Jacob Hughes", "Maggie Hughes", "", ""] },],
"Bus List 3": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Alyssa Thompson", "Amanda Andris", "Amelia Masters", "Ashlynn Feezor", "Ellie Baird", "Hayden Studnicki", "Hunter Studnicki", "Reagan DeHaan", "Sophie Nussbaum", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aubrey McClure", "Cooper White", "Emilynn Combs", "Evan Herbst", "Harper McGowan", "Isaiah Schwoerer", "Lauren Fehr", "Luke Jun", "Natalie Heil", "Pierce Vrooman", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Chaius Herbst", "Donny Spaulding", "Evie Jenkins", "Grace Masters", "Karis Wolfe", "Kobi White", "Lexi Horton", "Lydia Hurd", "Maggie Hughes", "Molly Kinzinger", "Raymond Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Ben Shearin", "Daphne Yates", "Eliana Woodman", "Everett Woodman", "Hayley Michels", "Jacob Hughes", "Jacob Stanfield", "Lexi Baird", "Lucy Kramer", "Max Hudson", "Parker Michels", "Ryan Heil"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Annika Risinger", "Carl Hoefer", "Griffin Moore", "Hannah Spaulding", "Isaiah Herbst", "Levi Landes", "Lizzy Henard", "Mae Jones", "Paige Kinzinger", "Sydney Brown", "", ""] },],
"Bus List 4": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Addy Jeffrey", "Annika Risinger", "Eliana Woodman", "Ellie Baird", "Evie Jenkins", "Harper McGowan", "Kobi White", "Lexi Horton", "Lydia Hurd", "Parker Michels", "Pierce Vrooman", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amelia Masters", "Chaius Herbst", "Donny Spaulding", "Everett Woodman", "Hannah Spaulding", "Jacob Hughes", "Jacob Stanfield", "Max Hudson", "Molly Kinzinger", "Sam Masters", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Aine Staggs", "Amanda Andris", "Ashlynn Feezor", "Ben Shearin", "Lauren Fehr", "Lucy Kramer", "Mae Jones", "Natalie Heil", "Paige Kinzinger", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Carl Hoefer", "Grace Masters", "Griffin Moore", "Isaiah Herbst", "Isaiah Schwoerer", "Karis Wolfe", "Lexi Baird", "Lizzy Henard", "Luke Jun", "Maggie Hughes", "Reagan DeHaan", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aubrey McClure", "Cooper White", "Daphne Yates", "Emilynn Combs", "Evan Herbst", "Hayden Studnicki", "Hayley Michels", "Hunter Studnicki", "Levi Landes", "Raymond Hoefer", "Sophie Nussbaum", "", ""] },],
"Bus List 5": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Amelia Masters", "Grace Masters", "Harper McGowan", "Hayley Michels", "Isaiah Herbst", "Lexi Baird", "Lucy Kramer", "Maggie Hughes", "Molly Kinzinger", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Carl Hoefer", "Daphne Yates", "Emilynn Combs", "Isaiah Schwoerer", "Jacob Hughes", "Karis Wolfe", "Kobi White", "Levi Landes", "Parker Michels", "Ryan Heil", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Chaius Herbst", "Ellie Baird", "Evan Herbst", "Evie Jenkins", "Lauren Fehr", "Lizzy Henard", "Natalie Heil", "Pierce Vrooman", "Sam Masters", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Annika Risinger", "Ashlynn Feezor", "Eliana Woodman", "Everett Woodman", "Hunter Studnicki", "Jacob Stanfield", "Lexi Horton", "Luke Jun", "Lydia Hurd", "Paige Kinzinger", "Sophie Nussbaum", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Alyssa Thompson", "Ben Shearin", "Cooper White", "Donny Spaulding", "Griffin Moore", "Hannah Spaulding", "Hayden Studnicki", "Mae Jones", "Max Hudson", "Raymond Hoefer", "", ""] },],
"Bus List 6": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Annika Risinger", "Ashlynn Feezor", "Aubrey McClure", "Ellie Baird", "Harper McGowan", "Hayley Michels", "Luke Jun", "Parker Michels", "Raymond Hoefer", "Sam Masters", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Alyssa Thompson", "Amelia Masters", "Evan Herbst", "Everett Woodman", "Evie Jenkins", "Griffin Moore", "Lydia Hurd", "Maggie Hughes", "Molly Kinzinger", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aine Staggs", "Eliana Woodman", "Isaiah Herbst", "Jacob Hughes", "Kobi White", "Lauren Fehr", "Lexi Baird", "Lizzy Henard", "Lucy Kramer", "Mae Jones", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Carl Hoefer", "Cooper White", "Daphne Yates", "Grace Masters", "Hannah Spaulding", "Hayden Studnicki", "Levi Landes", "Lexi Horton", "Max Hudson", "Natalie Heil", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Ben Shearin", "Chaius Herbst", "Donny Spaulding", "Emilynn Combs", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Stanfield", "Karis Wolfe", "Paige Kinzinger", "Pierce Vrooman", "", ""] },],
"Bus List 7": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Carl Hoefer", "Evie Jenkins", "Griffin Moore", "Jacob Hughes", "Levi Landes", "Lizzy Henard", "Luke Jun", "Lydia Hurd", "Raymond Hoefer", "Ryan Heil", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Annika Risinger", "Ashlynn Feezor", "Cooper White", "Everett Woodman", "Hayden Studnicki", "Isaiah Herbst", "Lexi Baird", "Lucy Kramer", "Maggie Hughes", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Evan Herbst", "Harper McGowan", "Hunter Studnicki", "Lauren Fehr", "Lexi Horton", "Molly Kinzinger", "Parker Michels", "Reagan DeHaan", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Amelia Masters", "Chaius Herbst", "Ellie Baird", "Emilynn Combs", "Grace Masters", "Hannah Spaulding", "Kobi White", "Mae Jones", "Max Hudson", "Paige Kinzinger", "Pierce Vrooman", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Aubrey McClure", "Ben Shearin", "Daphne Yates", "Donny Spaulding", "Eliana Woodman", "Hayley Michels", "Isaiah Schwoerer", "Jacob Stanfield", "Karis Wolfe", "Natalie Heil", "", ""] },],
"Bus List 8": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Alyssa Thompson", "Ellie Baird", "Evie Jenkins", "Hunter Studnicki", "Jacob Hughes", "Lexi Baird", "Lucy Kramer", "Maggie Hughes", "Molly Kinzinger", "Parker Michels", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amelia Masters", "Annika Risinger", "Eliana Woodman", "Emilynn Combs", "Griffin Moore", "Hannah Spaulding", "Harper McGowan", "Jacob Stanfield", "Lydia Hurd", "Max Hudson", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Ashlynn Feezor", "Carl Hoefer", "Chaius Herbst", "Cooper White", "Evan Herbst", "Grace Masters", "Lauren Fehr", "Levi Landes", "Luke Jun", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Donny Spaulding", "Hayden Studnicki", "Hayley Michels", "Isaiah Schwoerer", "Karis Wolfe", "Lexi Horton", "Mae Jones", "Paige Kinzinger", "Raymond Hoefer", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Aubrey McClure", "Ben Shearin", "Daphne Yates", "Everett Woodman", "Isaiah Herbst", "Kobi White", "Lizzy Henard", "Natalie Heil", "Pierce Vrooman", "Zander Hoefer", "", ""] },],
"Bus List 9": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Addy Jeffrey", "Amanda Andris", "Ashlynn Feezor", "Cooper White", "Daphne Yates", "Donny Spaulding", "Eliana Woodman", "Harper McGowan", "Hayden Studnicki", "Hayley Michels", "Max Hudson", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Everett Woodman", "Griffin Moore", "Hannah Spaulding", "Jacob Stanfield", "Lizzy Henard", "Lucy Kramer", "Luke Jun", "Lydia Hurd", "Parker Michels", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Carl Hoefer", "Chaius Herbst", "Evie Jenkins", "Isaiah Schwoerer", "Karis Wolfe", "Mae Jones", "Maggie Hughes", "Molly Kinzinger", "Raymond Hoefer", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Annika Risinger", "Ben Shearin", "Hunter Studnicki", "Isaiah Herbst", "Kobi White", "Lauren Fehr", "Levi Landes", "Natalie Heil", "Paige Kinzinger", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Amelia Masters", "Aubrey McClure", "Ellie Baird", "Emilynn Combs", "Evan Herbst", "Grace Masters", "Jacob Hughes", "Lexi Baird", "Lexi Horton", "Pierce Vrooman", "", ""] },],
"Bus List 10": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Addy Jeffrey", "Ashlynn Feezor", "Daphne Yates", "Grace Masters", "Isaiah Herbst", "Jacob Stanfield", "Lexi Baird", "Max Hudson", "Pierce Vrooman", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Ellie Baird", "Evie Jenkins", "Griffin Moore", "Hunter Studnicki", "Lexi Horton", "Lucy Kramer", "Luke Jun", "Molly Kinzinger", "Natalie Heil", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aine Staggs", "Cooper White", "Evan Herbst", "Everett Woodman", "Hannah Spaulding", "Harper McGowan", "Isaiah Schwoerer", "Kobi White", "Maggie Hughes", "Raymond Hoefer", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Annika Risinger", "Ben Shearin", "Carl Hoefer", "Chaius Herbst", "Donny Spaulding", "Eliana Woodman", "Hayley Michels", "Jacob Hughes", "Lauren Fehr", "Lizzy Henard", "Mae Jones", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amelia Masters", "Aubrey McClure", "Emilynn Combs", "Hayden Studnicki", "Karis Wolfe", "Levi Landes", "Lydia Hurd", "Paige Kinzinger", "Parker Michels", "Ryan Heil", "Sophie Nussbaum", "", ""] },],
"Bus List 11": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Ben Shearin", "Daphne Yates", "Harper McGowan", "Karis Wolfe", "Lexi Baird", "Lucy Kramer", "Pierce Vrooman", "Reagan DeHaan", "Sam Masters", "Sophie Nussbaum", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Aubrey McClure", "Grace Masters", "Hannah Spaulding", "Isaiah Schwoerer", "Levi Landes", "Lizzy Henard", "Lydia Hurd", "Max Hudson", "Natalie Heil", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Addy Jeffrey", "Ashlynn Feezor", "Carl Hoefer", "Hayley Michels", "Hunter Studnicki", "Jacob Stanfield", "Molly Kinzinger", "Paige Kinzinger", "Raymond Hoefer", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Amelia Masters", "Chaius Herbst", "Eliana Woodman", "Ellie Baird", "Evan Herbst", "Evie Jenkins", "Griffin Moore", "Isaiah Herbst", "Kobi White", "Lexi Horton", "Maggie Hughes", "Parker Michels"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Annika Risinger", "Cooper White", "Donny Spaulding", "Emilynn Combs", "Everett Woodman", "Hayden Studnicki", "Jacob Hughes", "Lauren Fehr", "Luke Jun", "Mae Jones", "", ""] },],
"Bus List 12": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Amelia Masters", "Chaius Herbst", "Evie Jenkins", "Griffin Moore", "Harper McGowan", "Lauren Fehr", "Lizzy Henard", "Lucy Kramer", "Max Hudson", "Pierce Vrooman", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Ashlynn Feezor", "Ben Shearin", "Ellie Baird", "Evan Herbst", "Hannah Spaulding", "Jacob Hughes", "Jacob Stanfield", "Lexi Baird", "Lydia Hurd", "Maggie Hughes", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Annika Risinger", "Carl Hoefer", "Emilynn Combs", "Isaiah Herbst", "Kobi White", "Lexi Horton", "Mae Jones", "Molly Kinzinger", "Raymond Hoefer", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Aubrey McClure", "Daphne Yates", "Eliana Woodman", "Everett Woodman", "Grace Masters", "Hayden Studnicki", "Hayley Michels", "Hunter Studnicki", "Levi Landes", "Ryan Heil", "Sydney Brown", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Amanda Andris", "Cooper White", "Donny Spaulding", "Isaiah Schwoerer", "Karis Wolfe", "Luke Jun", "Natalie Heil", "Paige Kinzinger", "Parker Michels", "Sophie Nussbaum", "", ""] },],
"Bus List 13": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Alyssa Thompson", "Carl Hoefer", "Ellie Baird", "Grace Masters", "Isaiah Herbst", "Karis Wolfe", "Lauren Fehr", "Luke Jun", "Lydia Hurd", "Maggie Hughes", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Annika Risinger", "Chaius Herbst", "Eliana Woodman", "Griffin Moore", "Jacob Stanfield", "Lexi Horton", "Lucy Kramer", "Mae Jones", "Ryan Heil", "Sydney Brown", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Ben Shearin", "Donny Spaulding", "Everett Woodman", "Harper McGowan", "Hayden Studnicki", "Lexi Baird", "Lizzy Henard", "Paige Kinzinger", "Parker Michels", "Reagan DeHaan", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Cooper White", "Daphne Yates", "Emilynn Combs", "Evan Herbst", "Hunter Studnicki", "Jacob Hughes", "Kobi White", "Levi Landes", "Max Hudson", "Molly Kinzinger", "Natalie Heil", "Sophie Nussbaum"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Amelia Masters", "Ashlynn Feezor", "Aubrey McClure", "Evie Jenkins", "Hannah Spaulding", "Hayley Michels", "Isaiah Schwoerer", "Pierce Vrooman", "Raymond Hoefer", "Sam Masters", "", ""] },],
"Bus List 14": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Harper McGowan", "Isaiah Herbst", "Jacob Hughes", "Jacob Stanfield", "Karis Wolfe", "Lexi Horton", "Maggie Hughes", "Molly Kinzinger", "Paige Kinzinger", "Parker Michels", "Sydney Brown", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amelia Masters", "Ashlynn Feezor", "Carl Hoefer", "Chaius Herbst", "Emilynn Combs", "Evan Herbst", "Hayden Studnicki", "Mae Jones", "Max Hudson", "Natalie Heil", "Raymond Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Alyssa Thompson", "Annika Risinger", "Aubrey McClure", "Ellie Baird", "Everett Woodman", "Levi Landes", "Luke Jun", "Lydia Hurd", "Pierce Vrooman", "Reagan DeHaan", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Ben Shearin", "Cooper White", "Donny Spaulding", "Eliana Woodman", "Evie Jenkins", "Grace Masters", "Griffin Moore", "Hannah Spaulding", "Hunter Studnicki", "Lucy Kramer", "Sophie Nussbaum", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Amanda Andris", "Daphne Yates", "Hayley Michels", "Isaiah Schwoerer", "Kobi White", "Lauren Fehr", "Lexi Baird", "Lizzy Henard", "Ryan Heil", "Sam Masters", "", ""] },],
"Bus List 15": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Annika Risinger", "Ben Shearin", "Cooper White", "Ellie Baird", "Evan Herbst", "Griffin Moore", "Karis Wolfe", "Levi Landes", "Lexi Baird", "Lizzy Henard", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Carl Hoefer", "Everett Woodman", "Grace Masters", "Hayden Studnicki", "Hunter Studnicki", "Jacob Stanfield", "Lucy Kramer", "Maggie Hughes", "Parker Michels", "Ryan Heil", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Amanda Andris", "Amelia Masters", "Aubrey McClure", "Chaius Herbst", "Daphne Yates", "Evie Jenkins", "Jacob Hughes", "Kobi White", "Lexi Horton", "Raymond Hoefer", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Alyssa Thompson", "Donny Spaulding", "Eliana Woodman", "Emilynn Combs", "Hannah Spaulding", "Hayley Michels", "Isaiah Herbst", "Isaiah Schwoerer", "Lydia Hurd", "Mae Jones", "Molly Kinzinger", "Paige Kinzinger"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Aine Staggs", "Ashlynn Feezor", "Harper McGowan", "Lauren Fehr", "Luke Jun", "Max Hudson", "Natalie Heil", "Pierce Vrooman", "Sam Masters", "Sophie Nussbaum", "", ""] },],
"Bus List 16": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Daphne Yates", "Evan Herbst", "Isaiah Herbst", "Jacob Hughes", "Lauren Fehr", "Lexi Baird", "Lucy Kramer", "Natalie Heil", "Pierce Vrooman", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Ashlynn Feezor", "Aubrey McClure", "Carl Hoefer", "Chaius Herbst", "Cooper White", "Evie Jenkins", "Hannah Spaulding", "Karis Wolfe", "Lydia Hurd", "Molly Kinzinger", "Paige Kinzinger", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Addy Jeffrey", "Everett Woodman", "Griffin Moore", "Hayden Studnicki", "Hunter Studnicki", "Isaiah Schwoerer", "Levi Landes", "Lexi Horton", "Sam Masters", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Amelia Masters", "Ben Shearin", "Donny Spaulding", "Ellie Baird", "Grace Masters", "Hayley Michels", "Luke Jun", "Mae Jones", "Max Hudson", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Annika Risinger", "Eliana Woodman", "Emilynn Combs", "Harper McGowan", "Jacob Stanfield", "Kobi White", "Lizzy Henard", "Maggie Hughes", "Parker Michels", "Raymond Hoefer", "", ""] },],
    };

    const busListDropdown = document.getElementById('busListDropdown');
    const passengerDisplay = document.getElementById('passengerDisplay');

    // Populate dropdown with bus lists
    for (const busList in data) {
        const option = document.createElement('option');
        option.value = busList;
        option.textContent = busList;
        busListDropdown.appendChild(option);
    }

    // Event listener for dropdown change
    busListDropdown.addEventListener('change', function () {
        const selectedBusList = busListDropdown.value;
        localStorage.setItem('selectedBusList', selectedBusList);
        displayPassengers(selectedBusList);
    });

    // Display passengers for the previously selected bus list
    const selectedBusList = localStorage.getItem('selectedBusList');
    if (selectedBusList) {
        busListDropdown.value = selectedBusList;
        displayPassengers(selectedBusList);
    }

    function displayPassengers(busList) {
        const vehicles = data[busList];
        if (vehicles) {
            let html = `<p><h2><strong>Passengers for ${busList}:</strong></h2></p>`;
            html += '<table>';
            html += '<thead><tr>';
            vehicles.forEach(vehicle => {
                html += `<th>${vehicle.vehicle}</th>`;
            });
            html += '</tr></thead><tbody>';

            const maxPassengers = Math.max(...vehicles.map(vehicle => vehicle.passengers.length));

            for (let i = 0; i < maxPassengers; i++) {
                let rowClass = i < 2 ? 'highlighted' : (i % 2 === 0 ? '' : 'alt-row'); // Apply 'highlighted' class to the first two rows, then alternate classes
                html += `<tr class="${rowClass}">`;
                vehicles.forEach(vehicle => {
                    let passenger = vehicle.passengers[i] || '';
                    if (i < 2) {
                        passenger = `<i>${passenger}</i>`; // Italicize the first two passengers
                    }
                    html += `<td>${passenger}</td>`;
                });
                html += '</tr>';
            }

            html += '</tbody></table>';
            passengerDisplay.innerHTML = html;
        } else {
            passengerDisplay.innerHTML = '';
        }
    }
});
