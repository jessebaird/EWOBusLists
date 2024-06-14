document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Bus List 1": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Cooper White", "Ellie Baird", "Evie Jenkins", "Griffin Moore", "Hannah Spaulding", "Jacob Hughes", "Jacob Stanfield", "Kobi White", "Natalie Heil", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Amanda Andris", "Aubrey McClure", "Carl Hoefer", "Donny Spaulding", "Evan Herbst", "Hayley Michels", "Lucy Kramer", "Luke Jun", "Max Hudson", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Ben Shearin", "Emilynn Combs", "Grace Masters", "Harper McGowan", "Lauren Fehr", "Levi Landes", "Molly Kinzinger", "Pierce Vrooman", "Raymond Hoefer", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Amelia Masters", "Chaius Herbst", "Daphne Yates", "Everett Woodman", "Hayden Studnicki", "Isaiah Schwoerer", "Lexi Baird", "Lydia Hurd", "Mae Jones", "Maggie Hughes", "Reagan DeHaan", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Annika Risinger", "Ashlynn Feezor", "Eliana Woodman", "Hunter Studnicki", "Isaiah Herbst", "Karis Wolfe", "Lexi Horton", "Lizzy Henard", "Paige Kinzinger", "Parker Michels", "Ryan Heil", "", ""] },],
"Bus List 2": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Amelia Masters", "Annika Risinger", "Aubrey McClure", "Carl Hoefer", "Eliana Woodman", "Griffin Moore", "Isaiah Herbst", "Kobi White", "Levi Landes", "Luke Jun", "Mae Jones", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Cooper White", "Daphne Yates", "Ellie Baird", "Evan Herbst", "Hayden Studnicki", "Hunter Studnicki", "Isaiah Schwoerer", "Lexi Baird", "Maggie Hughes", "Sophie Nussbaum", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Aine Staggs", "Amanda Andris", "Ashlynn Feezor", "Hannah Spaulding", "Hayley Michels", "Jacob Stanfield", "Karis Wolfe", "Molly Kinzinger", "Pierce Vrooman", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Chaius Herbst", "Everett Woodman", "Evie Jenkins", "Grace Masters", "Lauren Fehr", "Lizzy Henard", "Lydia Hurd", "Max Hudson", "Natalie Heil", "Raymond Hoefer", "Reagan DeHaan", "Ryan Heil"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Ben Shearin", "Donny Spaulding", "Emilynn Combs", "Harper McGowan", "Jacob Hughes", "Lexi Horton", "Lucy Kramer", "Paige Kinzinger", "Parker Michels", "Sydney Brown", "Zander Hoefer", "", ""] },],
"Bus List 3": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Chaius Herbst", "Cooper White", "Daphne Yates", "Donny Spaulding", "Everett Woodman", "Hunter Studnicki", "Jacob Hughes", "Karis Wolfe", "Maggie Hughes", "Paige Kinzinger", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Amanda Andris", "Ashlynn Feezor", "Hannah Spaulding", "Isaiah Schwoerer", "Lexi Baird", "Luke Jun", "Lydia Hurd", "Pierce Vrooman", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Alyssa Thompson", "Evan Herbst", "Isaiah Herbst", "Jacob Stanfield", "Kobi White", "Levi Landes", "Lizzy Henard", "Max Hudson", "Ryan Heil", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Ben Shearin", "Eliana Woodman", "Ellie Baird", "Emilynn Combs", "Evie Jenkins", "Grace Masters", "Griffin Moore", "Harper McGowan", "Hayley Michels", "Lauren Fehr", "Molly Kinzinger", "Reagan DeHaan", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Amelia Masters", "Annika Risinger", "Carl Hoefer", "Hayden Studnicki", "Lexi Horton", "Lucy Kramer", "Mae Jones", "Natalie Heil", "Parker Michels", "Raymond Hoefer", "", ""] },],
"Bus List 4": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Daphne Yates", "Ellie Baird", "Emilynn Combs", "Hannah Spaulding", "Harper McGowan", "Hayden Studnicki", "Lauren Fehr", "Lexi Baird", "Luke Jun", "Sam Masters", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Ben Shearin", "Evie Jenkins", "Hunter Studnicki", "Jacob Hughes", "Jacob Stanfield", "Lizzy Henard", "Max Hudson", "Natalie Heil", "Paige Kinzinger", "Parker Michels", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Addy Jeffrey", "Alyssa Thompson", "Amelia Masters", "Cooper White", "Griffin Moore", "Isaiah Herbst", "Karis Wolfe", "Lexi Horton", "Pierce Vrooman", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Annika Risinger", "Ashlynn Feezor", "Chaius Herbst", "Eliana Woodman", "Evan Herbst", "Isaiah Schwoerer", "Lucy Kramer", "Lydia Hurd", "Mae Jones", "Maggie Hughes", "Molly Kinzinger", "Reagan DeHaan"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Aine Staggs", "Carl Hoefer", "Donny Spaulding", "Everett Woodman", "Grace Masters", "Hayley Michels", "Kobi White", "Levi Landes", "Raymond Hoefer", "Ryan Heil", "", ""] },],
"Bus List 5": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Aine Staggs", "Amanda Andris", "Cooper White", "Eliana Woodman", "Griffin Moore", "Jacob Stanfield", "Lucy Kramer", "Luke Jun", "Max Hudson", "Natalie Heil", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Carl Hoefer", "Chaius Herbst", "Emilynn Combs", "Levi Landes", "Lexi Horton", "Mae Jones", "Paige Kinzinger", "Pierce Vrooman", "Reagan DeHaan", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Ben Shearin", "Everett Woodman", "Hannah Spaulding", "Harper McGowan", "Isaiah Herbst", "Karis Wolfe", "Lauren Fehr", "Lizzy Henard", "Molly Kinzinger", "Parker Michels", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Amelia Masters", "Annika Risinger", "Aubrey McClure", "Donny Spaulding", "Evan Herbst", "Evie Jenkins", "Hayden Studnicki", "Hayley Michels", "Kobi White", "Lydia Hurd", "Maggie Hughes", "Raymond Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Ashlynn Feezor", "Daphne Yates", "Ellie Baird", "Grace Masters", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Lexi Baird", "Sam Masters", "Sophie Nussbaum", "", ""] },],
"Bus List 6": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Amelia Masters", "Ben Shearin", "Emilynn Combs", "Isaiah Herbst", "Kobi White", "Luke Jun", "Molly Kinzinger", "Natalie Heil", "Parker Michels", "Sam Masters", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Addy Jeffrey", "Alyssa Thompson", "Amanda Andris", "Daphne Yates", "Evie Jenkins", "Lexi Horton", "Lizzy Henard", "Lydia Hurd", "Raymond Hoefer", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Ashlynn Feezor", "Donny Spaulding", "Ellie Baird", "Evan Herbst", "Everett Woodman", "Hannah Spaulding", "Harper McGowan", "Hayden Studnicki", "Lucy Kramer", "Maggie Hughes", "Max Hudson", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aubrey McClure", "Cooper White", "Eliana Woodman", "Hayley Michels", "Isaiah Schwoerer", "Karis Wolfe", "Lauren Fehr", "Levi Landes", "Mae Jones", "Paige Kinzinger", "Pierce Vrooman", "Reagan DeHaan", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Annika Risinger", "Carl Hoefer", "Chaius Herbst", "Grace Masters", "Griffin Moore", "Hunter Studnicki", "Jacob Hughes", "Jacob Stanfield", "Lexi Baird", "Ryan Heil", "", ""] },],
"Bus List 7": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Alyssa Thompson", "Ben Shearin", "Carl Hoefer", "Evan Herbst", "Evie Jenkins", "Harper McGowan", "Hayden Studnicki", "Levi Landes", "Lucy Kramer", "Paige Kinzinger", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Annika Risinger", "Everett Woodman", "Grace Masters", "Jacob Stanfield", "Lexi Baird", "Lizzy Henard", "Luke Jun", "Mae Jones", "Max Hudson", "Sophie Nussbaum", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Hayley Michels", "Isaiah Herbst", "Isaiah Schwoerer", "Jacob Hughes", "Kobi White", "Lauren Fehr", "Lydia Hurd", "Molly Kinzinger", "Pierce Vrooman", "Reagan DeHaan", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Aubrey McClure", "Cooper White", "Donny Spaulding", "Eliana Woodman", "Ellie Baird", "Hannah Spaulding", "Hunter Studnicki", "Lexi Horton", "Maggie Hughes", "Natalie Heil", "Sam Masters", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Amelia Masters", "Ashlynn Feezor", "Chaius Herbst", "Daphne Yates", "Emilynn Combs", "Griffin Moore", "Karis Wolfe", "Parker Michels", "Raymond Hoefer", "Ryan Heil", "", ""] },],
"Bus List 8": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Alyssa Thompson", "Chaius Herbst", "Eliana Woodman", "Hayley Michels", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Jacob Stanfield", "Molly Kinzinger", "Paige Kinzinger", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Cooper White", "Evie Jenkins", "Hannah Spaulding", "Lauren Fehr", "Lizzy Henard", "Lucy Kramer", "Parker Michels", "Raymond Hoefer", "Ryan Heil", "Sophie Nussbaum", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Annika Risinger", "Aubrey McClure", "Carl Hoefer", "Griffin Moore", "Hayden Studnicki", "Kobi White", "Lexi Baird", "Mae Jones", "Maggie Hughes", "Natalie Heil", "Reagan DeHaan", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Amelia Masters", "Daphne Yates", "Donny Spaulding", "Ellie Baird", "Emilynn Combs", "Everett Woodman", "Grace Masters", "Isaiah Herbst", "Karis Wolfe", "Levi Landes", "Lexi Horton", "Lydia Hurd"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Ashlynn Feezor", "Ben Shearin", "Evan Herbst", "Harper McGowan", "Luke Jun", "Max Hudson", "Pierce Vrooman", "Sam Masters", "Sydney Brown", "Zander Hoefer", "", ""] },],
"Bus List 9": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Daphne Yates", "Everett Woodman", "Hayley Michels", "Hunter Studnicki", "Jacob Hughes", "Karis Wolfe", "Lizzy Henard", "Maggie Hughes", "Pierce Vrooman", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Alyssa Thompson", "Cooper White", "Ellie Baird", "Evan Herbst", "Hannah Spaulding", "Isaiah Schwoerer", "Kobi White", "Max Hudson", "Parker Michels", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Aine Staggs", "Evie Jenkins", "Grace Masters", "Levi Landes", "Lucy Kramer", "Luke Jun", "Lydia Hurd", "Molly Kinzinger", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Amelia Masters", "Annika Risinger", "Ashlynn Feezor", "Ben Shearin", "Chaius Herbst", "Emilynn Combs", "Griffin Moore", "Harper McGowan", "Jacob Stanfield", "Lauren Fehr", "Paige Kinzinger", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Carl Hoefer", "Donny Spaulding", "Eliana Woodman", "Hayden Studnicki", "Isaiah Herbst", "Lexi Baird", "Lexi Horton", "Mae Jones", "Natalie Heil", "Raymond Hoefer", "Ryan Heil", "", ""] },],
"Bus List 10": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Annika Risinger", "Aubrey McClure", "Eliana Woodman", "Everett Woodman", "Hayden Studnicki", "Karis Wolfe", "Lizzy Henard", "Lydia Hurd", "Paige Kinzinger", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Amanda Andris", "Ben Shearin", "Donny Spaulding", "Ellie Baird", "Lexi Baird", "Lexi Horton", "Maggie Hughes", "Pierce Vrooman", "Ryan Heil", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Amelia Masters", "Carl Hoefer", "Griffin Moore", "Isaiah Herbst", "Jacob Stanfield", "Lucy Kramer", "Luke Jun", "Molly Kinzinger", "Reagan DeHaan", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Ashlynn Feezor", "Cooper White", "Grace Masters", "Hannah Spaulding", "Harper McGowan", "Hayley Michels", "Kobi White", "Levi Landes", "Mae Jones", "Max Hudson", "Parker Michels", "Raymond Hoefer", "Sydney Brown"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Chaius Herbst", "Daphne Yates", "Emilynn Combs", "Evan Herbst", "Evie Jenkins", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Lauren Fehr", "Natalie Heil", "", ""] },],
"Bus List 11": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Amanda Andris", "Annika Risinger", "Aubrey McClure", "Evan Herbst", "Isaiah Herbst", "Jacob Stanfield", "Kobi White", "Lexi Baird", "Molly Kinzinger", "Ryan Heil", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Alyssa Thompson", "Cooper White", "Donny Spaulding", "Hannah Spaulding", "Harper McGowan", "Hayden Studnicki", "Lexi Horton", "Lucy Kramer", "Luke Jun", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Chaius Herbst", "Evie Jenkins", "Hayley Michels", "Hunter Studnicki", "Isaiah Schwoerer", "Karis Wolfe", "Levi Landes", "Mae Jones", "Natalie Heil", "Reagan DeHaan", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amelia Masters", "Ashlynn Feezor", "Carl Hoefer", "Emilynn Combs", "Grace Masters", "Griffin Moore", "Jacob Hughes", "Lizzy Henard", "Lydia Hurd", "Maggie Hughes", "Paige Kinzinger", "Pierce Vrooman", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Ben Shearin", "Daphne Yates", "Eliana Woodman", "Ellie Baird", "Everett Woodman", "Lauren Fehr", "Max Hudson", "Parker Michels", "Raymond Hoefer", "Sophie Nussbaum", "", ""] },],
"Bus List 12": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Alyssa Thompson", "Amanda Andris", "Cooper White", "Donny Spaulding", "Evie Jenkins", "Grace Masters", "Lexi Baird", "Max Hudson", "Molly Kinzinger", "Natalie Heil", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Annika Risinger", "Aubrey McClure", "Carl Hoefer", "Harper McGowan", "Karis Wolfe", "Lexi Horton", "Mae Jones", "Paige Kinzinger", "Pierce Vrooman", "Raymond Hoefer", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Ashlynn Feezor", "Eliana Woodman", "Ellie Baird", "Evan Herbst", "Hayden Studnicki", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Luke Jun", "Maggie Hughes", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Ben Shearin", "Chaius Herbst", "Daphne Yates", "Isaiah Herbst", "Lauren Fehr", "Levi Landes", "Lizzy Henard", "Lucy Kramer", "Reagan DeHaan", "Sam Masters", "Sophie Nussbaum", "Zander Hoefer"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Amelia Masters", "Emilynn Combs", "Everett Woodman", "Griffin Moore", "Hannah Spaulding", "Hayley Michels", "Jacob Stanfield", "Kobi White", "Lydia Hurd", "Parker Michels", "", ""] },],
"Bus List 13": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Alyssa Thompson", "Annika Risinger", "Carl Hoefer", "Ellie Baird", "Harper McGowan", "Jacob Hughes", "Levi Landes", "Lydia Hurd", "Molly Kinzinger", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Ashlynn Feezor", "Emilynn Combs", "Evan Herbst", "Everett Woodman", "Evie Jenkins", "Jacob Stanfield", "Luke Jun", "Maggie Hughes", "Parker Michels", "Raymond Hoefer", "Ryan Heil", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Amanda Andris", "Chaius Herbst", "Hayley Michels", "Isaiah Herbst", "Kobi White", "Lauren Fehr", "Lexi Horton", "Lizzy Henard", "Mae Jones", "Pierce Vrooman", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amelia Masters", "Cooper White", "Griffin Moore", "Hannah Spaulding", "Isaiah Schwoerer", "Karis Wolfe", "Lexi Baird", "Lucy Kramer", "Max Hudson", "Paige Kinzinger", "Reagan DeHaan", "Sam Masters", "Sophie Nussbaum"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Aubrey McClure", "Ben Shearin", "Daphne Yates", "Donny Spaulding", "Eliana Woodman", "Grace Masters", "Hayden Studnicki", "Hunter Studnicki", "Natalie Heil", "Sydney Brown", "", ""] },],
"Bus List 14": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Annika Risinger", "Donny Spaulding", "Eliana Woodman", "Emilynn Combs", "Karis Wolfe", "Kobi White", "Lucy Kramer", "Lydia Hurd", "Maggie Hughes", "Parker Michels", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Chaius Herbst", "Griffin Moore", "Hunter Studnicki", "Isaiah Schwoerer", "Natalie Heil", "Raymond Hoefer", "Ryan Heil", "Sam Masters", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Amelia Masters", "Carl Hoefer", "Cooper White", "Daphne Yates", "Everett Woodman", "Evie Jenkins", "Hayley Michels", "Max Hudson", "Molly Kinzinger", "Pierce Vrooman", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Aine Staggs", "Amanda Andris", "Ashlynn Feezor", "Aubrey McClure", "Grace Masters", "Hayden Studnicki", "Isaiah Herbst", "Levi Landes", "Lexi Horton", "Lizzy Henard", "Paige Kinzinger", "Reagan DeHaan"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Ben Shearin", "Ellie Baird", "Evan Herbst", "Hannah Spaulding", "Harper McGowan", "Jacob Hughes", "Jacob Stanfield", "Lauren Fehr", "Lexi Baird", "Luke Jun", "Mae Jones", "", ""] },],
"Bus List 15": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Addy Jeffrey", "Alyssa Thompson", "Eliana Woodman", "Jacob Stanfield", "Kobi White", "Lizzy Henard", "Lucy Kramer", "Maggie Hughes", "Raymond Hoefer", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Ashlynn Feezor", "Cooper White", "Donny Spaulding", "Emilynn Combs", "Evie Jenkins", "Hayden Studnicki", "Lauren Fehr", "Lydia Hurd", "Molly Kinzinger", "Parker Michels", "Pierce Vrooman", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Annika Risinger", "Chaius Herbst", "Grace Masters", "Griffin Moore", "Hayley Michels", "Jacob Hughes", "Karis Wolfe", "Natalie Heil", "Paige Kinzinger", "Sam Masters", "Sophie Nussbaum", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Amanda Andris", "Aubrey McClure", "Daphne Yates", "Evan Herbst", "Hannah Spaulding", "Harper McGowan", "Isaiah Herbst", "Lexi Baird", "Lexi Horton", "Luke Jun", "Max Hudson", "Reagan DeHaan", "Ryan Heil"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Amelia Masters", "Ben Shearin", "Carl Hoefer", "Ellie Baird", "Everett Woodman", "Hunter Studnicki", "Isaiah Schwoerer", "Levi Landes", "Mae Jones", "Sydney Brown", "", ""] },],
"Bus List 16": [
{ vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Ashlynn Feezor", "Ben Shearin", "Donny Spaulding", "Eliana Woodman", "Everett Woodman", "Griffin Moore", "Lizzy Henard", "Mae Jones", "Parker Michels", "Reagan DeHaan", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Evie Jenkins", "Grace Masters", "Hayley Michels", "Hunter Studnicki", "Lauren Fehr", "Lexi Baird", "Lydia Hurd", "Max Hudson", "Raymond Hoefer", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Chris Michels", "Jonathan Goodyear", "Addy Jeffrey", "Annika Risinger", "Aubrey McClure", "Ellie Baird", "Harper McGowan", "Jacob Hughes", "Karis Wolfe", "Kobi White", "Lucy Kramer", "Luke Jun", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Aine Staggs", "Chaius Herbst", "Emilynn Combs", "Evan Herbst", "Isaiah Herbst", "Isaiah Schwoerer", "Levi Landes", "Lexi Horton", "Maggie Hughes", "Natalie Heil", "Pierce Vrooman", "Sam Masters"] },
{ vehicle: "Rental", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Amelia Masters", "Carl Hoefer", "Cooper White", "Daphne Yates", "Hannah Spaulding", "Hayden Studnicki", "Jacob Stanfield", "Molly Kinzinger", "Paige Kinzinger", "Ryan Heil", "", ""] },],
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
            let html = `<p><strong>Passengers for ${busList}:</strong></p>`;
            html += '<table>';
            html += '<thead><tr>';
            vehicles.forEach(vehicle => {
                html += `<th>${vehicle.vehicle}</th>`;
            });
            html += '</tr></thead><tbody>';

            const maxPassengers = Math.max(...vehicles.map(vehicle => vehicle.passengers.length));

            for (let i = 0; i < maxPassengers; i++) {
                html += '<tr>';
                vehicles.forEach(vehicle => {
                    html += `<td>${vehicle.passengers[i] || ''}</td>`;
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
