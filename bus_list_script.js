document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Bus List 1": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Everett Woodman", "Grace Masters", "Harper McGowan", "Hayley Michels", "Jacob Stanfield", "Lizzy Henard", "Lydia Hurd", "Mae Jones", "Reagan DeHaan", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Aubrey McClure", "Donny Spaulding", "Evan Herbst", "Griffin Moore", "Hannah Spaulding", "Isaiah Herbst", "Jacob Hughes", "Kobi White", "Levi Landes", "Lucy Kramer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Annika Risinger", "Cooper White", "Daphne Yates", "Ellie Baird", "Emilynn Combs", "Luke Jun", "Maggie Hughes", "Natalie Heil", "Pierce Vrooman", "Ryan Heil", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Amanda Andris", "Amelia Masters", "Ben Shearin", "Evie Jenkins", "Isaiah Schwoerer", "Lauren Fehr", "Lexi Baird", "Lexi Horton", "Paige Kinzinger", "Raymond Hoefer", "Sydney Brown", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Ashlynn Feezor", "Carl Hoefer", "Chaius Herbst", "Eliana Woodman", "Hayden Studnicki", "Hunter Studnicki", "Max Hudson", "Molly Kinzinger", "Parker Michels", "Zander Hoefer", "", ""] },],
"Bus List 2": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Addy Jeffrey", "Ashlynn Feezor", "Chaius Herbst", "Ellie Baird", "Emilynn Combs", "Evan Herbst", "Hayley Michels", "Raymond Hoefer", "Sophie Nussbaum", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Ben Shearin", "Donny Spaulding", "Eliana Woodman", "Everett Woodman", "Griffin Moore", "Kobi White", "Lucy Kramer", "Maggie Hughes", "Parker Michels", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Annika Risinger", "Cooper White", "Evie Jenkins", "Hannah Spaulding", "Hayden Studnicki", "Hunter Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Jacob Stanfield", "Lydia Hurd", "Pierce Vrooman", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Aubrey McClure", "Grace Masters", "Harper McGowan", "Isaiah Herbst", "Levi Landes", "Lexi Baird", "Lizzy Henard", "Mae Jones", "Max Hudson", "Natalie Heil", "Ryan Heil", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Amelia Masters", "Carl Hoefer", "Daphne Yates", "Lauren Fehr", "Lexi Horton", "Luke Jun", "Molly Kinzinger", "Paige Kinzinger", "Reagan DeHaan", "Sydney Brown", "", ""] },],
"Bus List 3": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Annika Risinger", "Eliana Woodman", "Harper McGowan", "Hunter Studnicki", "Isaiah Herbst", "Kobi White", "Lauren Fehr", "Levi Landes", "Lucy Kramer", "Mae Jones", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Ashlynn Feezor", "Carl Hoefer", "Chaius Herbst", "Cooper White", "Hannah Spaulding", "Hayden Studnicki", "Hayley Michels", "Max Hudson", "Pierce Vrooman", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Amelia Masters", "Ben Shearin", "Daphne Yates", "Donny Spaulding", "Evan Herbst", "Everett Woodman", "Isaiah Schwoerer", "Lizzy Henard", "Parker Michels", "Raymond Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Aubrey McClure", "Griffin Moore", "Lexi Baird", "Lexi Horton", "Luke Jun", "Lydia Hurd", "Molly Kinzinger", "Paige Kinzinger", "Reagan DeHaan", "Sydney Brown", "Zander Hoefer", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Ellie Baird", "Emilynn Combs", "Evie Jenkins", "Grace Masters", "Jacob Hughes", "Jacob Stanfield", "Maggie Hughes", "Natalie Heil", "Ryan Heil", "Sophie Nussbaum", "", ""] },],
"Bus List 4": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Evie Jenkins", "Grace Masters", "Isaiah Schwoerer", "Jacob Stanfield", "Kobi White", "Lauren Fehr", "Max Hudson", "Raymond Hoefer", "Ryan Heil", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Ellie Baird", "Emilynn Combs", "Hayden Studnicki", "Hunter Studnicki", "Isaiah Herbst", "Levi Landes", "Lexi Horton", "Lizzy Henard", "Mae Jones", "Molly Kinzinger", "Pierce Vrooman", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Amelia Masters", "Aubrey McClure", "Cooper White", "Hannah Spaulding", "Jacob Hughes", "Lexi Baird", "Paige Kinzinger", "Reagan DeHaan", "Sam Masters", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Amanda Andris", "Annika Risinger", "Ashlynn Feezor", "Carl Hoefer", "Daphne Yates", "Eliana Woodman", "Everett Woodman", "Griffin Moore", "Hayley Michels", "Lucy Kramer", "Luke Jun", "Maggie Hughes", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Alyssa Thompson", "Ben Shearin", "Chaius Herbst", "Donny Spaulding", "Evan Herbst", "Harper McGowan", "Lydia Hurd", "Natalie Heil", "Parker Michels", "Sydney Brown", "", ""] },],
"Bus List 5": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Amelia Masters", "Daphne Yates", "Donny Spaulding", "Griffin Moore", "Harper McGowan", "Isaiah Herbst", "Isaiah Schwoerer", "Lauren Fehr", "Lexi Horton", "Natalie Heil", "Sam Masters", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Carl Hoefer", "Eliana Woodman", "Emilynn Combs", "Everett Woodman", "Jacob Hughes", "Lexi Baird", "Lucy Kramer", "Lydia Hurd", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Alyssa Thompson", "Annika Risinger", "Hannah Spaulding", "Jacob Stanfield", "Kobi White", "Luke Jun", "Maggie Hughes", "Max Hudson", "Molly Kinzinger", "Paige Kinzinger", "Raymond Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Aine Staggs", "Ashlynn Feezor", "Ben Shearin", "Cooper White", "Ellie Baird", "Evan Herbst", "Evie Jenkins", "Hayley Michels", "Hunter Studnicki", "Levi Landes", "Mae Jones", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Aubrey McClure", "Chaius Herbst", "Grace Masters", "Hayden Studnicki", "Lizzy Henard", "Parker Michels", "Pierce Vrooman", "Reagan DeHaan", "Ryan Heil", "Zander Hoefer", "", ""] },],
"Bus List 6": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Amelia Masters", "Ben Shearin", "Carl Hoefer", "Daphne Yates", "Emilynn Combs", "Hannah Spaulding", "Lexi Horton", "Max Hudson", "Parker Michels", "Sydney Brown", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Eliana Woodman", "Grace Masters", "Harper McGowan", "Hayley Michels", "Hunter Studnicki", "Kobi White", "Molly Kinzinger", "Raymond Hoefer", "Reagan DeHaan", "Ryan Heil", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Amanda Andris", "Ashlynn Feezor", "Aubrey McClure", "Donny Spaulding", "Everett Woodman", "Isaiah Schwoerer", "Jacob Hughes", "Levi Landes", "Lizzy Henard", "Luke Jun", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Annika Risinger", "Evie Jenkins", "Hayden Studnicki", "Jacob Stanfield", "Lexi Baird", "Lucy Kramer", "Lydia Hurd", "Mae Jones", "Maggie Hughes", "Natalie Heil", "Paige Kinzinger", "Pierce Vrooman", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Chaius Herbst", "Cooper White", "Ellie Baird", "Evan Herbst", "Griffin Moore", "Isaiah Herbst", "Lauren Fehr", "Sam Masters", "Sophie Nussbaum", "Zander Hoefer", "", ""] },],
"Bus List 7": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Amelia Masters", "Aubrey McClure", "Cooper White", "Hayley Michels", "Isaiah Schwoerer", "Lauren Fehr", "Mae Jones", "Natalie Heil", "Parker Michels", "Reagan DeHaan", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Addy Jeffrey", "Ashlynn Feezor", "Ben Shearin", "Evan Herbst", "Everett Woodman", "Hunter Studnicki", "Levi Landes", "Lexi Baird", "Lucy Kramer", "Pierce Vrooman", "Sam Masters", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Annika Risinger", "Daphne Yates", "Lexi Horton", "Luke Jun", "Max Hudson", "Paige Kinzinger", "Raymond Hoefer", "Ryan Heil", "Sydney Brown", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Carl Hoefer", "Chaius Herbst", "Donny Spaulding", "Eliana Woodman", "Ellie Baird", "Hannah Spaulding", "Hayden Studnicki", "Isaiah Herbst", "Kobi White", "Lizzy Henard", "Maggie Hughes", "Molly Kinzinger", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Alyssa Thompson", "Amanda Andris", "Emilynn Combs", "Evie Jenkins", "Grace Masters", "Griffin Moore", "Harper McGowan", "Jacob Hughes", "Jacob Stanfield", "Lydia Hurd", "Sophie Nussbaum", "", ""] },],
"Bus List 8": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aubrey McClure", "Donny Spaulding", "Eliana Woodman", "Evan Herbst", "Kobi White", "Luke Jun", "Natalie Heil", "Pierce Vrooman", "Sam Masters", "Sophie Nussbaum", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Amelia Masters", "Ashlynn Feezor", "Carl Hoefer", "Grace Masters", "Hayley Michels", "Jacob Hughes", "Lauren Fehr", "Lizzy Henard", "Molly Kinzinger", "Parker Michels", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Alyssa Thompson", "Ben Shearin", "Cooper White", "Everett Woodman", "Evie Jenkins", "Harper McGowan", "Isaiah Herbst", "Lucy Kramer", "Mae Jones", "Reagan DeHaan", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Annika Risinger", "Emilynn Combs", "Griffin Moore", "Hannah Spaulding", "Hayden Studnicki", "Isaiah Schwoerer", "Levi Landes", "Lexi Baird", "Lydia Hurd", "Maggie Hughes", "Max Hudson", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Amanda Andris", "Chaius Herbst", "Daphne Yates", "Ellie Baird", "Hunter Studnicki", "Jacob Stanfield", "Lexi Horton", "Paige Kinzinger", "Raymond Hoefer", "Ryan Heil", "", ""] },],
"Bus List 9": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Ashlynn Feezor", "Chaius Herbst", "Cooper White", "Donny Spaulding", "Everett Woodman", "Maggie Hughes", "Molly Kinzinger", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum", "Zander Hoefer", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Amanda Andris", "Annika Risinger", "Eliana Woodman", "Emilynn Combs", "Hayden Studnicki", "Jacob Hughes", "Lizzy Henard", "Mae Jones", "Paige Kinzinger", "Parker Michels", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Daphne Yates", "Evie Jenkins", "Hannah Spaulding", "Harper McGowan", "Hunter Studnicki", "Isaiah Herbst", "Isaiah Schwoerer", "Levi Landes", "Lexi Baird", "Luke Jun", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Aubrey McClure", "Evan Herbst", "Griffin Moore", "Jacob Stanfield", "Kobi White", "Lauren Fehr", "Lydia Hurd", "Max Hudson", "Raymond Hoefer", "Sam Masters", "Sydney Brown", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Amelia Masters", "Ben Shearin", "Carl Hoefer", "Ellie Baird", "Grace Masters", "Hayley Michels", "Lexi Horton", "Lucy Kramer", "Natalie Heil", "Pierce Vrooman", "", ""] },],
"Bus List 10": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Aubrey McClure", "Carl Hoefer", "Donny Spaulding", "Eliana Woodman", "Ellie Baird", "Hayley Michels", "Hunter Studnicki", "Jacob Hughes", "Luke Jun", "Molly Kinzinger", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Ben Shearin", "Chaius Herbst", "Grace Masters", "Harper McGowan", "Hayden Studnicki", "Jacob Stanfield", "Lauren Fehr", "Lexi Horton", "Lydia Hurd", "Raymond Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Amanda Andris", "Amelia Masters", "Daphne Yates", "Mae Jones", "Maggie Hughes", "Paige Kinzinger", "Pierce Vrooman", "Reagan DeHaan", "Sam Masters", "Sophie Nussbaum", "Sydney Brown", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Evan Herbst", "Everett Woodman", "Evie Jenkins", "Isaiah Schwoerer", "Levi Landes", "Lexi Baird", "Lizzy Henard", "Lucy Kramer", "Max Hudson", "Natalie Heil", "Zander Hoefer", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Annika Risinger", "Ashlynn Feezor", "Cooper White", "Emilynn Combs", "Griffin Moore", "Hannah Spaulding", "Isaiah Herbst", "Kobi White", "Parker Michels", "Ryan Heil", "", ""] },],
"Bus List 11": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aubrey McClure", "Chaius Herbst", "Ellie Baird", "Everett Woodman", "Hannah Spaulding", "Kobi White", "Luke Jun", "Lydia Hurd", "Molly Kinzinger", "Reagan DeHaan", "Sophie Nussbaum", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Annika Risinger", "Ashlynn Feezor", "Carl Hoefer", "Griffin Moore", "Isaiah Schwoerer", "Lizzy Henard", "Lucy Kramer", "Parker Michels", "Sydney Brown", "Zander Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Ben Shearin", "Cooper White", "Hayley Michels", "Isaiah Herbst", "Jacob Stanfield", "Levi Landes", "Lexi Horton", "Max Hudson", "Natalie Heil", "Pierce Vrooman", "Sam Masters", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Amanda Andris", "Amelia Masters", "Daphne Yates", "Donny Spaulding", "Eliana Woodman", "Evan Herbst", "Evie Jenkins", "Harper McGowan", "Jacob Hughes", "Raymond Hoefer", "Ryan Heil", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Addy Jeffrey", "Emilynn Combs", "Grace Masters", "Hayden Studnicki", "Hunter Studnicki", "Lauren Fehr", "Lexi Baird", "Mae Jones", "Maggie Hughes", "Paige Kinzinger", "", ""] },],
"Bus List 12": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Ashlynn Feezor", "Chaius Herbst", "Daphne Yates", "Emilynn Combs", "Harper McGowan", "Levi Landes", "Mae Jones", "Pierce Vrooman", "Raymond Hoefer", "Sam Masters", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Aine Staggs", "Amanda Andris", "Donny Spaulding", "Evie Jenkins", "Grace Masters", "Jacob Hughes", "Lauren Fehr", "Lexi Horton", "Lizzy Henard", "Natalie Heil", "Paige Kinzinger", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Cooper White", "Eliana Woodman", "Everett Woodman", "Hannah Spaulding", "Isaiah Herbst", "Kobi White", "Lexi Baird", "Maggie Hughes", "Sydney Brown", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Adam Jun", "Addy Jeffrey", "Amelia Masters", "Annika Risinger", "Ben Shearin", "Ellie Baird", "Evan Herbst", "Hayley Michels", "Hunter Studnicki", "Luke Jun", "Molly Kinzinger", "Parker Michels", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Carl Hoefer", "Griffin Moore", "Hayden Studnicki", "Isaiah Schwoerer", "Jacob Stanfield", "Lucy Kramer", "Lydia Hurd", "Max Hudson", "Reagan DeHaan", "Ryan Heil", "Sophie Nussbaum", "", ""] },],
"Bus List 13": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Amanda Andris", "Annika Risinger", "Ashlynn Feezor", "Emilynn Combs", "Grace Masters", "Kobi White", "Levi Landes", "Luke Jun", "Maggie Hughes", "Paige Kinzinger", "Sam Masters", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Aine Staggs", "Carl Hoefer", "Donny Spaulding", "Ellie Baird", "Everett Woodman", "Evie Jenkins", "Hannah Spaulding", "Hayden Studnicki", "Jacob Stanfield", "Raymond Hoefer", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Cooper White", "Eliana Woodman", "Griffin Moore", "Hunter Studnicki", "Isaiah Herbst", "Jacob Hughes", "Lauren Fehr", "Lexi Baird", "Lucy Kramer", "Lydia Hurd", "Mae Jones", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Amelia Masters", "Chaius Herbst", "Daphne Yates", "Evan Herbst", "Hayley Michels", "Isaiah Schwoerer", "Natalie Heil", "Parker Michels", "Pierce Vrooman", "Ryan Heil", "Zander Hoefer", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Addy Jeffrey", "Aubrey McClure", "Ben Shearin", "Harper McGowan", "Lexi Horton", "Lizzy Henard", "Max Hudson", "Molly Kinzinger", "Reagan DeHaan", "Sophie Nussbaum", "Sydney Brown", "", ""] },],
"Bus List 14": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Aine Staggs", "Amelia Masters", "Annika Risinger", "Ellie Baird", "Evie Jenkins", "Hayden Studnicki", "Isaiah Schwoerer", "Jacob Hughes", "Maggie Hughes", "Max Hudson", "Natalie Heil", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Adam Jun", "Amanda Andris", "Eliana Woodman", "Grace Masters", "Hannah Spaulding", "Jacob Stanfield", "Lizzy Henard", "Mae Jones", "Pierce Vrooman", "Sam Masters", "Sydney Brown", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Addy Jeffrey", "Ashlynn Feezor", "Aubrey McClure", "Cooper White", "Everett Woodman", "Lauren Fehr", "Lexi Baird", "Lexi Horton", "Luke Jun", "Molly Kinzinger", "Ryan Heil", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Alyssa Thompson", "Ben Shearin", "Carl Hoefer", "Chaius Herbst", "Emilynn Combs", "Griffin Moore", "Hayley Michels", "Hunter Studnicki", "Isaiah Herbst", "Kobi White", "Parker Michels", "Reagan DeHaan", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Daphne Yates", "Donny Spaulding", "Evan Herbst", "Harper McGowan", "Levi Landes", "Lucy Kramer", "Lydia Hurd", "Paige Kinzinger", "Raymond Hoefer", "Sophie Nussbaum", "Zander Hoefer", "", ""] },],
"Bus List 15": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Alyssa Thompson", "Amelia Masters", "Annika Risinger", "Ben Shearin", "Donny Spaulding", "Emilynn Combs", "Grace Masters", "Griffin Moore", "Jacob Stanfield", "Kobi White", "Parker Michels", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amanda Andris", "Cooper White", "Daphne Yates", "Eliana Woodman", "Evan Herbst", "Evie Jenkins", "Hannah Spaulding", "Lauren Fehr", "Lizzy Henard", "Reagan DeHaan", "Sophie Nussbaum", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Adam Jun", "Addy Jeffrey", "Aubrey McClure", "Carl Hoefer", "Hunter Studnicki", "Isaiah Herbst", "Isaiah Schwoerer", "Jacob Hughes", "Maggie Hughes", "Natalie Heil", "Paige Kinzinger", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Ashlynn Feezor", "Chaius Herbst", "Ellie Baird", "Everett Woodman", "Hayden Studnicki", "Lucy Kramer", "Mae Jones", "Max Hudson", "Molly Kinzinger", "Ryan Heil", "Sam Masters", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Harper McGowan", "Hayley Michels", "Levi Landes", "Lexi Baird", "Lexi Horton", "Luke Jun", "Lydia Hurd", "Pierce Vrooman", "Raymond Hoefer", "Sydney Brown", "Zander Hoefer", "", ""] },],
"Bus List 16": [
{ vehicle: "Rac", passengers: ["Chris Michels", "Jonathan Goodyear", "Amelia Masters", "Chaius Herbst", "Eliana Woodman", "Everett Woodman", "Grace Masters", "Hayley Michels", "Isaiah Herbst", "Jacob Hughes", "Lizzy Henard", "Lucy Kramer", "Parker Michels", "", ""] },
{ vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Cooper White", "Daphne Yates", "Ellie Baird", "Griffin Moore", "Hannah Spaulding", "Lexi Horton", "Luke Jun", "Lydia Hurd", "Maggie Hughes", "Molly Kinzinger", "", ""] },
{ vehicle: "Benny", passengers: ["Brandis Ulrich", "Sophie McCree", "Aine Staggs", "Aubrey McClure", "Harper McGowan", "Jacob Stanfield", "Kobi White", "Levi Landes", "Max Hudson", "Paige Kinzinger", "Ryan Heil", "Sydney Brown", "Zander Hoefer", "", ""] },
{ vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Addy Jeffrey", "Amanda Andris", "Ashlynn Feezor", "Carl Hoefer", "Emilynn Combs", "Evan Herbst", "Hayden Studnicki", "Isaiah Schwoerer", "Natalie Heil", "Pierce Vrooman", "Raymond Hoefer", "Sophie Nussbaum", ""] },
{ vehicle: "Snoof", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Annika Risinger", "Ben Shearin", "Donny Spaulding", "Evie Jenkins", "Hunter Studnicki", "Lauren Fehr", "Lexi Baird", "Mae Jones", "Reagan DeHaan", "Sam Masters", "", ""] },],
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
