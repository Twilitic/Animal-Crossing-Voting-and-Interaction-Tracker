import { Villager } from './types';

const villagerDataString = `
Ace | Male | Bird | Jock | August 11 | DnMe+ (e-Card), PC, NH (Amiibo)
Admiral | Male | Bird | Cranky | January 27 | GCN, DnMe+, NL, WA, PC, NH
Agent S | Female | Squirrel | Peppy | July 2 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Agnes | Female | Pig | Sisterly | April 21 | NL, WA, PC, NH
Aisle | Male | Cub | Lazy | May 24 | DnMe+ (Islander)
Al | Male | Gorilla | Lazy | October 18 | CF, NL, WA, PC, NH
Alfonso | Male | Alligator | Lazy | June 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Alice | Female | Koala | Normal | August 19 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Alli | Female | Alligator | Snooty | November 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Amelia | Female | Eagle | Snooty | November 19 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Anabelle | Female | Anteater | Peppy | February 16 | WW, CF, NL, WA, PC, NH
Analog | Male | Penguin | Jock | June 13 | DnMe+ (Islander)
Anchovy | Male | Bird | Lazy | March 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Angus | Male | Bull | Cranky | April 30 | GCN, DnMe+, NL, WA, PC, NH
Anicotti | Female | Mouse | Peppy | February 24 | GCN, DnMe+, NL, WA, PC, NH
Ankha | Female | Cat | Snooty | September 22 | GCN, DnMe+, CF, NL, WA, PC, NH
Annalisa | Female | Anteater | Normal | February 6 | NL, WA, PC, NH
Annalise | Female | Horse | Snooty | December 2 | NL, WA, PC, NH
Antonio | Male | Anteater | Jock | October 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Apollo | Male | Eagle | Cranky | July 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Apple | Female | Hamster | Peppy | September 24 | NL, WA, PC, NH
Astrid | Female | Kangaroo | Snooty | September 8 | GCN, DnMe+, NL, WA, PC, NH
Audie | Female | Wolf | Peppy | August 31 | NH, PC
Aurora | Female | Penguin | Normal | January 27 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Ava | Female | Chicken | Normal | April 28 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Avery | Male | Eagle | Cranky | February 22 | CF, NL, WA, PC, NH
Axel | Male | Elephant | Jock | March 23 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Azalea | Female | Rhino | Snooty | December 18 | GCN, DnMe+, PC, NH (Amiibo)
Aziz | Male | Lion | Jock | August 13 | GCN, DnMe+
Baabara | Female | Sheep | Snooty | March 28 | GCN, DnMe+, NL, WA, PC, NH
Bam | Male | Deer | Jock | November 7 | NL, WA, PC, NH
Bangle | Female | Tiger | Peppy | August 27 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Barold | Male | Cub | Lazy | March 2 | NL, WA, PC, NH
Bea | Female | Dog | Normal | October 15 | GCN, DnMe+, WA, PC, NH
Beardo | Male | Bear | Smug | September 27 | NL, WA, PC, NH
Beau | Male | Deer | Lazy | April 5 | NL, WA, PC, NH
Becky | Female | Chicken | Snooty | December 9 | CF, NL, WA, PC, NH
Bella | Female | Mouse | Peppy | December 28 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Belle | Female | Cow | Peppy | May 20 | GCN, DnMe+
Benedict | Male | Chicken | Lazy | October 10 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Benjamin | Male | Dog | Lazy | August 3 | NL, WA, PC, NH
Bertha | Female | Hippo | Normal | April 25 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bessie | Female | Cow | Normal | June 10 | GCN, DnMe+
Bettina | Female | Mouse | Normal | June 12 | CF, NL, WA, PC, NH
Betty | Female | Chicken | Normal | March 30 | GCN, DnMe+
Bianca | Female | Tiger | Peppy | December 13 | NL, WA, PC, NH
Biff | Male | Hippo | Jock | March 29 | GCN, DnMe+, NL, WA, PC, NH
Big Top | Male | Elephant | Lazy | October 3 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bill | Male | Duck | Jock | February 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Billy | Male | Goat | Jock | March 25 | GCN, DnMe+, CF, NL, WA, PC, NH
Biskit | Male | Dog | Lazy | May 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bitty | Female | Hippo | Snooty | October 6 | GCN, DnMe+, NL, WA, PC, NH
Blaire | Female | Squirrel | Snooty | July 3 | GCN, DnMe+, CF, NL, WA, PC, NH
Blanche | Female | Ostrich | Snooty | December 21 | NL, WA, PC, NH
Bluebear | Female | Cub | Peppy | June 24 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bob | Male | Cat | Lazy | January 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bonbon | Female | Rabbit | Peppy | March 3 | NL, WA, PC, NH
Bones | Male | Dog | Lazy | August 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Boomer | Male | Penguin | Lazy | February 7 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Boone | Male | Gorilla | Jock | September 12 | GCN, DnMe+, NL, WA, PC, NH
Boots | Male | Alligator | Jock | August 7 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Boris | Male | Pig | Cranky | November 6 | GCN, DnMe+, CF, NL, WA, PC, NH
Bow | Male | Dog | Lazy | August 20 | DnMe+ (e-Card)
Boyd | Male | Gorilla | Cranky | October 1 | CF, NL, WA, PC, NH
Bree | Female | Mouse | Snooty | July 7 | CF, NL, WA, PC, NH
Broccolo | Male | Mouse | Lazy | June 30 | CF, NL, WA, PC, NH
Broffina | Female | Chicken | Snooty | October 24 | NL, WA, PC, NH
Bruce | Male | Deer | Cranky | May 26 | NL, WA, PC, NH
Bubbles | Female | Hippo | Peppy | September 18 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Buck | Male | Horse | Jock | April 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bud | Male | Lion | Jock | August 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Bunnie | Female | Rabbit | Peppy | May 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Butch | Male | Dog | Cranky | November 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Buzz | Male | Eagle | Cranky | December 7 | GCN, DnMe+, CF, NL, WA, PC, NH
Cally | Female | Squirrel | Normal | September 4 | NL, WA, PC, NH
Camofrog | Male | Frog | Cranky | June 5 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Canberra | Female | Koala | Sisterly | May 14 | NL, WA, PC, NH
Candi | Female | Mouse | Peppy | April 13 | GCN, DnMe+, NL, WA, PC, NH
Carmen | Female | Rabbit | Peppy | January 6 | CF, NL, WA, PC, NH
Carmen (Mouse) | Female | Mouse | Snooty | December 6 | GCN, DnMe+
Caroline | Female | Squirrel | Normal | July 15 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Carrot | Female | Cow | Peppy | March 14 | DnMe+ (e-Card)
Carrie | Female | Kangaroo | Normal | December 5 | GCN, DnMe+, CF, NL, WA, PC, NH
Cashmere | Female | Sheep | Snooty | April 2 | GCN, DnMe+, NL, WA, PC, NH
Cece | Female | Squirrel | Peppy | May 28 | WA (Amiibo)
Cephalobot | Male | Octopus | Smug | April 1 | NH, PC
Cesar | Male | Gorilla | Cranky | September 6 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Chadder | Male | Mouse | Smug | December 15 | WA, PC, NH
Chai | Female | Elephant | Peppy | March 6 | WA (Amiibo), PC, NH (Amiibo)
Champ | Male | Monkey | Jock | June 25 | WW, CF
Chantelle | Female | Squirrel | Snooty | September 2 | DnMe+ (e-Card)
Charlise | Female | Bear | Sisterly | April 17 | NL, WA, PC, NH
Chelsea | Female | Deer | Normal | January 18 | WA (Amiibo), PC, NH (Amiibo)
Cheri | Female | Cub | Peppy | March 17 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Cherry | Female | Dog | Sisterly | May 11 | NL, WA, PC, NH
Chester | Male | Cub | Lazy | August 6 | CF, NL, WA, PC, NH
Chevre | Female | Goat | Normal | March 6 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Chico | Male | Mouse | Lazy | October 7 | GCN, DnMe+
Chief | Male | Wolf | Cranky | December 19 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Chops | Male | Pig | Smug | October 13 | NL, WA, PC, NH
Chow | Male | Bear | Cranky | July 22 | GCN, DnMe+, CF, NL, WA, PC, NH
Chrissy | Female | Rabbit | Peppy | August 28 | CF, NL, WA, PC, NH
Chuck | Male | Bull | Cranky | December 11 | GCN, DnMe+
Clara | Female | Bear | Normal | March 3 | DnMe+ (Islander)
Claude | Male | Rabbit | Lazy | December 3 | GCN, DnMe+, WA, PC, NH
Claudia | Female | Tiger | Snooty | November 22 | NL, WA, PC, NH
Clay | Male | Hamster | Lazy | October 19 | NL, WA, PC, NH
Cleo | Female | Horse | Snooty | February 9 | GCN, DnMe+, CF, NL, WA, PC, NH
Clyde | Male | Horse | Lazy | May 1 | NL, WA, PC, NH
Coach | Male | Bull | Jock | April 29 | NL, WA, PC, NH
Cobb | Male | Pig | Jock | October 7 | CF, NL, WA, PC, NH
Coco | Female | Rabbit | Normal | March 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Cole | Male | Rabbit | Lazy | August 10 | WA, PC, NH
Colton | Male | Horse | Smug | May 22 | NL, WA, PC, NH
Cookie | Female | Dog | Peppy | June 18 | GCN, DnMe+, CF, NL, WA, PC, NH
Cousteau | Male | Frog | Jock | December 17 | NL, WA, PC, NH
Cranston | Male | Ostrich | Lazy | September 23 | NL, WA, PC, NH
Croque | Male | Frog | Cranky | July 18 | NL, WA, PC, NH
Cube | Male | Penguin | Lazy | January 29 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Cupcake | Female | Cub | Snooty | July 12 | GCN, DnMe+
Curt | Male | Bear | Cranky | July 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Cyd | Male | Elephant | Cranky | June 9 | NH, PC
Cyrano | Male | Anteater | Cranky | March 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Daisy | Female | Dog | Normal | November 16 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Deena | Female | Duck | Normal | June 27 | GCN, DnMe+, CF, NL, WA, PC, NH
Deirdre | Female | Deer | Sisterly | May 4 | NL, WA, PC, NH
Del | Male | Alligator | Cranky | May 27 | CF, NL, WA, PC, NH
Deli | Male | Monkey | Lazy | May 24 | NL, WA, PC, NH
Derwin | Male | Duck | Lazy | May 25 | GCN, DnMe+, CF, NL, WA, PC, NH
Diana | Female | Deer | Snooty | January 4 | NL, WA, PC, NH
Diva | Female | Frog | Sisterly | October 2 | NL, WA, PC, NH
Dobie | Male | Wolf | Cranky | February 17 | GCN, DnMe+, WA, PC, NH
Doc | Male | Rabbit | Lazy | March 16 | GCN, DnMe+, WA, PC, NH
Dom | Male | Sheep | Jock | March 18 | NH, PC
Dora | Female | Mouse | Normal | February 18 | GCN, DnMe+, CF, NL, WA, PC, NH
Dotty | Female | Rabbit | Peppy | March 14 | GCN, DnMe+, CF, NL, WA, PC, NH
Dozer | Male | Bear | Lazy | February 23 | GCN, DnMe+
Drago | Male | Alligator | Lazy | February 12 | NL, WA, PC, NH
Drake | Male | Duck | Lazy | June 25 | WA, PC, NH
Drift | Male | Frog | Jock | October 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Ed | Male | Horse | Smug | September 16 | GCN, DnMe+, CF, NL, WA, PC, NH
Egbert | Male | Chicken | Lazy | October 14 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Elina | Female | Elephant | Snooty | October 20 | DnMe+ (Islander)
Elise | Female | Monkey | Snooty | March 21 | CF, NL, WA, PC, NH
Ellie | Female | Elephant | Normal | May 12 | GCN, DnMe+, WA, PC, NH
Elmer | Male | Horse | Lazy | October 5 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Emerald | Female | Frog | Normal | February 14 | GCN, DnMe+
Emot | Male | Penguin | Lazy | February 23 | DnMe+ (e-Card)
Epona | Female | Horse | Jock | November 21 | WA (Amiibo)
Erik | Male | Deer | Lazy | July 27 | NL, WA, PC, NH
Étoile | Female | Sheep | Normal | December 25 | WA (Amiibo), PC, NH (Amiibo)
Eugene | Male | Koala | Smug | October 26 | NL, WA, PC, NH
Eunice | Female | Sheep | Normal | April 3 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Faith | Female | Koala | Normal | March 21 | GCN, DnMe+ (Islander), PC, NH (Amiibo)
Fang | Male | Wolf | Cranky | December 18 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Fauna | Female | Deer | Normal | March 26 | NL, WA, PC, NH
Felicity | Female | Cat | Peppy | March 30 | DnMe+ (e-Card), CF, NL, WA, PC, NH
Felyne | Male | Cat | Lazy | January 6 | WA (Amiibo)
Filbert | Male | Squirrel | Lazy | June 3 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Filly | Female | Horse | Snooty | May 21 | WA (Amiibo)
Finn | Male | Cub | Jock | October 25 | DnMe+ (e-Card)
Flash | Male | Bird | Jock | April 1 | DnMe+ (Islander)
Flip | Male | Monkey | Jock | November 21 | NL, WA, PC, NH
Flo | Female | Penguin | Sisterly | September 2 | NL, WA, PC, NH
Flora | Female | Ostrich | Peppy | February 9 | NL, WA, PC, NH
Flossie | Female | Mouse | Peppy | September 17 | DnMe+ (Islander)
Flurry | Female | Hamster | Normal | January 30 | NL, WA, PC, NH
Francine | Female | Rabbit | Snooty | January 22 | CF, NL, WA, PC, NH
Frank | Male | Eagle | Cranky | July 30 | CF, NL, WA, PC, NH
Freckles | Female | Duck | Peppy | February 19 | GCN, DnMe+, CF, NL, WA, PC, NH
Frett | Male | Dog | Cranky | October 30 | NH, PC
Freya | Female | Wolf | Snooty | December 14 | GCN, DnMe+, CF, NL, WA, PC, NH
Friga | Female | Penguin | Snooty | October 16 | GCN, DnMe+, CF, NL, WA, PC, NH
Frita | Female | Sheep | Sisterly | July 16 | NL, WA, PC, NH
Frobert | Male | Frog | Jock | February 8 | GCN, DnMe+, CF, NL, WA, PC, NH
Fruity | Female | Bear | Normal | August 28 | DnMe+ (Islander)
Fuchsia | Female | Deer | Sisterly | September 19 | NL, WA, PC, NH
Gabi | Female | Rabbit | Peppy | December 16 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Gala | Female | Pig | Normal | March 5 | NL, WA, PC, NH
Ganon | Male | Pig | Cranky | April 21 | WA (Amiibo)
Gaston | Male | Rabbit | Cranky | October 28 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Gayle | Female | Alligator | Normal | May 17 | NL, WA, PC, NH
Gen | Male | Rabbit | Smug | April 2 | DnMe+ (e-Card)
Genji | Male | Rabbit | Jock | January 21 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Gigi | Female | Frog | Snooty | August 11 | CF, NL, WA, PC, NH
Gladys | Female | Ostrich | Normal | January 10 | GCN, DnMe+, CF, NL, WA, PC, NH
Gloria | Female | Duck | Snooty | August 12 | CF, NL, WA, PC, NH
Goose | Male | Chicken | Jock | October 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Gonzo | Male | Koala | Cranky | October 13 | GCN, DnMe+, WA, PC, NH
Graham | Male | Hamster | Smug | June 20 | NL, WA, PC, NH
Greta | Female | Mouse | Snooty | September 5 | NL, WA, PC, NH
Grizzly | Male | Bear | Cranky | July 31 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Groucho | Male | Bear | Cranky | October 23 | GCN, DnMe+, CF, NL, WA, PC, NH
Gruff | Male | Goat | Cranky | August 29 | GCN, DnMe+, NL, WA, PC, NH
Gwen | Female | Penguin | Snooty | January 23 | GCN, DnMe+, CF, NL, WA, PC, NH
Hambo | Male | Pig | Jock | May 13 | GCN, DnMe+
Hamlet | Male | Hamster | Jock | May 30 | NL, WA, PC, NH
Hamphrey | Male | Hamster | Cranky | February 25 | NL, WA, PC, NH
Hank | Male | Chicken | Jock | November 20 | GCN, DnMe+
Hans | Male | Gorilla | Smug | December 5 | WA, PC, NH
Harry | Male | Hippo | Cranky | January 7 | CF, NL, WA, PC, NH
Hazel | Female | Squirrel | Sisterly | August 30 | NL, WA, PC, NH
Hector | Male | Chicken | Jock | July 11 | GCN, DnMe+
Henry | Male | Frog | Smug | September 21 | GCN, DnMe+, NL, WA, PC, NH
Higgins | Male | Hippo | Cranky | December 6 | DnMe+ (e-Card)
Hippeux | Male | Hippo | Smug | October 15 | NL, WA, PC, NH
Holden | Male | Hamster | Jock | July 22 | WA (Amiibo)
Hopkins | Male | Rabbit | Lazy | February 11 | GCN, DnMe+, WA, PC, NH
Hopper | Male | Penguin | Cranky | April 6 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Hornsby | Male | Rhino | Lazy | March 20 | GCN, DnMe+, WA, PC, NH
Huck | Male | Frog | Smug | July 9 | GCN, DnMe+, WA, PC, NH
Huggy | Female | Koala | Peppy | March 20 | GCN, DnMe+
Hugh | Male | Pig | Lazy | December 30 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Iggly | Male | Penguin | Jock | November 2 | GCN, DnMe+, NL, WA, PC, NH
Iggy | Male | Goat | Jock | November 11 | GCN, DnMe+
Ike | Male | Bear | Cranky | May 16 | WA, PC, NH
Inkwell | Male | Octopus | Jock | June 2 | WA (Amiibo)
Ione | Female | Squirrel | Normal | September 11 | NH, PC
Jacob | Male | Bird | Lazy | August 24 | WA, PC, NH
Jacques | Male | Bird | Smug | June 22 | NL, WA, PC, NH
Jambette | Female | Frog | Normal | October 27 | GCN, DnMe+, CF, NL, WA, PC, NH
Jane | Female | Gorilla | Snooty | May 26 | GCN, DnMe+
Jay | Male | Bird | Jock | July 17 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Jeremiah | Male | Frog | Lazy | July 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Jitters | Male | Bird | Jock | February 2 | WW, CF, NL, WA, PC, NH
Joe | Male | Bird | Jock | October 25 | DnMe+ (e-Card)
Joey | Male | Duck | Lazy | January 3 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Judy | Female | Cub | Snooty | March 10 | NH, PC
Jūbei | Male | Lion | Cranky | October 27 | DnMe+ (e-Card)
Julia | Female | Ostrich | Snooty | July 31 | GCN, DnMe+, WA, PC, NH
Julian | Male | Horse | Smug | March 15 | NL, WA, PC, NH
June | Female | Cub | Normal | May 21 | DnMe+ (e-Card), WA, PC, NH
Kabuki | Male | Cat | Cranky | November 29 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Katt | Female | Cat | Sisterly | April 27 | NL, WA, PC, NH
Keaton | Male | Eagle | Smug | June 1 | NL, WA, PC, NH
Ken | Male | Chicken | Smug | December 23 | NL, WA, PC, NH
Ketchup | Female | Duck | Peppy | July 27 | WA, PC, NH
Kevin | Male | Pig | Jock | April 26 | NL, WA, PC, NH
Kid Cat | Male | Cat | Jock | August 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Kidd | Male | Goat | Smug | June 28 | CF, NL, WA, PC, NH
Kiki | Female | Cat | Normal | October 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Kit | Male | Cat | Jock | June 4 | GCN, DnMe+
Kitt | Female | Kangaroo | Normal | October 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Kitty | Female | Cat | Snooty | February 15 | GCN, DnMe+, CF, NL, WA, PC, NH
Klaus | Male | Bear | Smug | March 31 | NL, WA, PC, NH
Knox | Male | Chicken | Cranky | November 23 | CF, NL, WA, PC, NH
Kody | Male | Cub | Jock | September 28 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Koharu | Female | Mouse | Peppy | October 11 | DnMe+ (Islander)
Kyle | Male | Wolf | Smug | December 6 | NL, WA, PC, NH
Leigh | Female | Chicken | Snooty | August 2 | DnMe+ (e-Card)
Leo | Male | Lion | Jock | July 29 | DnMe+ (e-Card)
Leopold | Male | Lion | Smug | August 14 | CF, NL, WA, PC, NH
Lily | Female | Frog | Normal | February 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Limberg | Male | Mouse | Cranky | October 17 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Lionel | Male | Lion | Smug | July 29 | NL, WA, PC, NH
Liz | Female | Alligator | Normal | August 19 | GCN, DnMe+
Lloyd | Male | Gorilla | Lazy | December 28 | DnMe+ (Islander)
Lolly | Female | Cat | Normal | March 27 | DnMe+ (e-Card), CF, NL, WA, PC, NH
Lopez | Male | Deer | Smug | August 20 | NL, WA, PC, NH
Louie | Male | Gorilla | Jock | March 26 | GCN, DnMe+, CF, NL, WA, PC, NH
Lucha | Male | Bird | Smug | December 12 | NL, WA, PC, NH
Lucky | Male | Dog | Lazy | November 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Lucy | Female | Pig | Normal | June 2 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Lulu | Female | Anteater | Snooty | June 11 | DnMe+ (Islander)
Lulu | Female | Hippo | Peppy | June 28 | GCN
Lyman | Male | Koala | Jock | October 12 | NL, WA, PC, NH
Mac | Male | Dog | Jock | November 11 | CF, NL, WA, PC, NH
Madam Rosa | Female | Bird | Snooty | March 13 | DnMe+ (Islander)
Maddie | Female | Dog | Peppy | January 11 | WA, PC, NH
Maelle | Female | Duck | Snooty | April 8 | GCN, DnMe+, CF, NL, WA, PC, NH
Maggie | Female | Pig | Normal | September 3 | GCN, DnMe+, CF, NL, WA, PC, NH
Mallary | Female | Duck | Snooty | November 17 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Maple | Female | Cub | Normal | June 15 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Marce | Male | Kangaroo | Jock | November 17 | DnMe+ (e-Card)
Marcel | Male | Dog | Lazy | December 31 | CF, NL, WA, PC, NH
Marcie | Female | Kangaroo | Normal | May 31 | NL, WA, PC, NH
Marcy | Female | Kangaroo | Normal | January 28 | GCN
Margie | Female | Elephant | Normal | January 28 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Marina | Female | Octopus | Normal | June 26 | CF, NL, WA, PC, NH
Marlo | Male | Hamster | Cranky | June 26 | NH, PC
Marshal | Male | Squirrel | Smug | September 29 | NL, WA, PC, NH
Marty | Male | Cub | Lazy | April 16 | WA (Amiibo), PC, NH (Amiibo)
Masa | Male | Mouse | Jock | September 14 | DnMe+ (Islander)
Mathilda | Female | Kangaroo | Snooty | November 1 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Medli | Female | Bird | Normal | December 13 | WA (Amiibo)
Megumi | Female | Mouse | Normal | February 15 | DnMe+ (e-Card)
Megan | Female | Bear | Normal | March 13 | NH, PC
Melba | Female | Koala | Normal | April 12 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Meow | Female | Cat | Peppy | August 2 | DnMe+ (e-Card)
Merengue | Female | Rhino | Normal | March 19 | NL, WA, PC, NH
Merry | Female | Cat | Peppy | June 29 | DnMe+ (e-Card), CF, NL, WA, PC, NH
Midge | Female | Bird | Normal | March 12 | WW, CF, NL, WA, PC, NH
Mint | Female | Squirrel | Snooty | May 2 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Mira | Female | Rabbit | Sisterly | July 6 | NL, WA, PC, NH
Miranda | Female | Duck | Snooty | April 23 | NL, WA, PC, NH
Mitzi | Female | Cat | Normal | September 25 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Moe | Male | Cat | Lazy | January 12 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Molly | Female | Duck | Normal | March 7 | NL, WA, PC, NH
Monique | Female | Cat | Snooty | September 30 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Monty | Male | Monkey | Cranky | December 7 | GCN, DnMe+, CF, NL, WA, PC, NH
Moose | Male | Mouse | Jock | September 13 | GCN, DnMe+, CF, NL, WA, PC, NH
Mott | Male | Lion | Jock | July 10 | CF, NL, WA, PC, NH
Muffy | Female | Sheep | Sisterly | February 14 | NL, WA, PC, NH
Murphy | Male | Cub | Cranky | December 29 | GCN, DnMe+, WA, PC, NH
Nan | Female | Goat | Normal | August 24 | GCN, DnMe+, CF, NL, WA, PC, NH
Nana | Female | Monkey | Normal | August 23 | GCN, DnMe+, NL, WA, PC, NH
Naomi | Female | Cow | Snooty | February 28 | NL, WA, PC, NH
Nate | Male | Bear | Lazy | August 16 | GCN, DnMe+, CF, NL, WA, PC, NH
Nibbles | Female | Squirrel | Peppy | July 19 | GCN, DnMe+, CF, NL, WA, PC, NH
Nindori | Male | Ostrich | Jock | April 2 | DnMe+ (e-Card)
Norma | Female | Cow | Normal | September 20 | GCN, DnMe+, WA, PC, NH
Nosegay | Female | Anteater | Normal | November 24 | GCN, DnMe+
O'Hare | Male | Rabbit | Smug | July 24 | GCN, DnMe+, NL, WA, PC, NH
Octavian | Male | Octopus | Cranky | September 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Olaf | Male | Anteater | Smug | May 19 | NL, WA, PC, NH
Olive | Female | Cub | Normal | July 12 | GCN, DnMe+, WA, PC, NH
Olivia | Female | Cat | Snooty | February 3 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Opal | Female | Elephant | Snooty | January 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Otis | Male | Bird | Lazy | November 15 | GCN, DnMe+
Oxford | Male | Bull | Cranky | September 5 | GCN, DnMe+
Ozzie | Male | Koala | Lazy | May 7 | GCN, DnMe+, NL, WA, PC, NH
Pancetti | Female | Pig | Snooty | November 14 | CF, NL, WA, PC, NH
Pango | Female | Anteater | Peppy | November 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Paolo | Male | Elephant | Lazy | May 5 | WA, PC, NH
Papi | Male | Horse | Lazy | January 10 | NL, WA, PC, NH
Pashmina | Female | Goat | Sisterly | December 26 | NL, WA, PC, NH
Pate | Female | Duck | Peppy | February 23 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Patricia | Female | Cow | Snooty | November 1 | DnMe+ (Islander)
Patty | Female | Cow | Peppy | May 10 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Paula | Female | Bear | Sisterly | March 22 | GCN, DnMe+, NL, WA, PC, NH
Peaches | Female | Horse | Normal | November 28 | GCN, DnMe+, CF, NL, WA, PC, NH
Peanut | Female | Squirrel | Peppy | June 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Pecan | Female | Squirrel | Snooty | September 10 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Peck | Male | Bird | Jock | July 25 | NL, WA, PC, NH
Peewee | Male | Gorilla | Cranky | September 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Pekoe | Female | Cub | Normal | May 18 | CF, NL, WA, PC, NH
Penelope | Female | Mouse | Peppy | February 5 | NL, WA, PC, NH
Penny | Female | Mouse | Peppy | May 31 | GCN, DnMe+
Petri | Female | Mouse | Snooty | October 23 | NH, PC
Petunia | Female | Rhino | Snooty | October 29 | GCN, DnMe+
Phil | Male | Ostrich | Smug | November 27 | CF, NL, WA, PC, NH
Phoebe | Female | Ostrich | Sisterly | April 22 | NL, WA, PC, NH
Pierre | Male | Cat | Jock | November 18 | DnMe+ (e-Card)
Pierce | Male | Eagle | Jock | January 8 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Pigleg | Male | Pig | Jock | July 26 | DnMe+ (Islander)
Pinky | Female | Bear | Peppy | September 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Piper | Female | Bird | Peppy | April 18 | GCN, DnMe+, WA, PC, NH
Pippy | Female | Rabbit | Peppy | June 14 | GCN, DnMe+, CF, NL, WA, PC, NH
Plucky | Female | Chicken | Sisterly | October 12 | GCN, DnMe+, CF, NL, WA, PC, NH
Poko | Male | Cub | Jock | January 5 | GCN, DnMe+
Pompom | Female | Duck | Peppy | February 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Poncho | Male | Cub | Jock | January 2 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Poppy | Female | Squirrel | Normal | August 5 | CF, NL, WA, PC, NH
Portia | Female | Dog | Snooty | October 25 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Prince | Male | Frog | Lazy | July 21 | GCN, DnMe+, NL, WA, PC, NH
Puck | Male | Penguin | Lazy | February 21 | GCN, DnMe+, CF, NL, WA, PC, NH
Puddles | Female | Frog | Peppy | January 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Pudge | Male | Cub | Lazy | June 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Punchy | Male | Cat | Lazy | April 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Purrl | Female | Cat | Snooty | May 29 | GCN, DnMe+, CF, NL, WA, PC, NH
Queenie | Female | Ostrich | Snooty | November 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Quillson | Male | Duck | Smug | December 22 | NL, WA, PC, NH
Quinn | Female | Eagle | Sisterly | January 20 | NH, PC
Raddle | Male | Frog | Lazy | June 6 | WA, PC, NH
Rasher | Male | Pig | Cranky | April 7 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Raymond | Male | Cat | Smug | October 1 | NH, PC
Renée | Female | Rhino | Sisterly | May 28 | NL, WA, PC, NH
Reneigh | Female | Horse | Sisterly | June 4 | NH, PC
Rex | Male | Lion | Lazy | July 24 | WA, PC, NH
Rhoda | Female | Chicken | Snooty | September 1 | GCN, DnMe+
Rhonda | Female | Rhino | Normal | January 24 | CF, NL, WA, PC, NH
Ribbot | Male | Frog | Jock | February 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Ricky | Male | Squirrel | Cranky | September 14 | GCN, DnMe+, CF, NL, WA, PC, NH
Rilla | Female | Gorilla | Peppy | April 1 | WA (Amiibo), PC, NH (Amiibo)
Rio | Female | Ostrich | Peppy | September 10 | PC, NH (Amiibo)
Rizzo | Male | Mouse | Cranky | January 17 | GCN, DnMe+, NL, WA, PC, NH
Roald | Male | Penguin | Jock | January 5 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Robin | Female | Bird | Snooty | December 4 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Rocco | Male | Hippo | Cranky | August 18 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Rocket | Female | Gorilla | Sisterly | April 14 | NL, WA, PC, NH
Rod | Male | Mouse | Jock | August 14 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Rodeo | Male | Bull | Lazy | October 29 | CF, NL, WA, PC, NH
Rodney | Male | Hamster | Smug | November 10 | NL, WA, PC, NH
Rollo | Male | Hippo | Lazy | May 3 | GCN, DnMe+
Rolf | Male | Tiger | Cranky | August 22 | GCN, DnMe+, CF, NL, WA, PC, NH
Rooney | Male | Kangaroo | Cranky | December 1 | NL, WA, PC, NH
Rory | Male | Lion | Jock | August 7 | NL, WA, PC, NH
Roscoe | Male | Horse | Cranky | June 16 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Rosie | Female | Cat | Peppy | February 27 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Rowan | Male | Tiger | Jock | August 26 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Ruby | Female | Rabbit | Peppy | December 25 | DnMe+ (e-Card), CF, NL, WA, PC, NH
Rudy | Male | Cat | Jock | December 20 | NL, WA, PC, NH
Sally | Female | Squirrel | Normal | June 19 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Samson | Male | Mouse | Jock | July 5 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Sandy | Female | Ostrich | Normal | October 21 | GCN, DnMe+, NL, WA, PC, NH
Sasha | Male | Rabbit | Lazy | May 19 | NH, PC
Savannah | Female | Horse | Normal | January 25 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Scoot | Male | Duck | Jock | June 13 | GCN, DnMe+, CF, NL, WA, PC, NH
Serena | Female | Dog | Snooty | July 9 | DnMe+ (e-Card)
Shari | Female | Monkey | Sisterly | April 10 | NL, WA, PC, NH
Sheldon | Male | Squirrel | Jock | February 26 | NL, WA, PC, NH
Shep | Male | Dog | Smug | November 24 | NL, WA, PC, NH
Sherb | Male | Goat | Lazy | January 18 | NH, PC
Shinabiru | Male | Sheep | Smug | December 30 | DnMe+ (e-Card)
Shino | Female | Deer | Peppy | October 31 | NH, PC
Shoukichi | Male | Cat | Jock | September 1 | DnMe+ (e-Card)
Simon | Male | Monkey | Lazy | January 19 | CF, NL, WA, PC, NH
Skye | Female | Wolf | Normal | March 24 | NL, WA, PC, NH
Sly | Male | Alligator | Jock | November 15 | WA, PC, NH
Snake | Male | Rabbit | Jock | November 3 | GCN, DnMe+, CF, NL, WA, PC, NH
Snooty | Female | Anteater | Snooty | October 24 | GCN, DnMe+
Soleil | Female | Hamster | Snooty | August 9 | NL, WA, PC, NH
Sparro | Male | Bird | Jock | November 20 | NL, WA, PC, NH
Spike | Male | Rhino | Cranky | June 17 | WA, PC, NH
Spork | Male | Pig | Lazy | September 3 | GCN, DnMe+, CF, NL, WA, PC, NH
Sprinkle | Female | Penguin | Peppy | February 20 | NL, WA, PC, NH
Sprocket | Male | Ostrich | Jock | December 1 | GCN, DnMe+, CF, NL, WA, PC, NH
Static | Male | Squirrel | Cranky | July 9 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Stella | Female | Sheep | Normal | April 9 | GCN, DnMe+, WA, PC, NH
Sterling | Male | Eagle | Jock | December 11 | CF, NL, WA, PC, NH
Stinky | Male | Cat | Jock | August 17 | GCN, DnMe+, CF, NL, WA, PC, NH
Stitches | Male | Cub | Lazy | February 10 | WW, CF, NL, WA, PC, NH
Stu | Male | Bull | Lazy | April 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Sue E | Female | Pig | Snooty | March 23 | GCN, DnMe+
Sunny | Female | Frog | Peppy | June 21 | DnMe+ (e-Card)
Sven | Male | Wolf | Cranky | October 31 | GCN, DnMe+
Sydney | Female | Koala | Normal | June 21 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Sylvana | Female | Squirrel | Normal | October 22 | DnMe+ (e-Card), WA, PC, NH
Sylvia | Female | Kangaroo | Sisterly | May 3 | GCN, DnMe+, NL, WA, PC, NH
T-Bone | Male | Bull | Cranky | May 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tabby | Female | Cat | Peppy | August 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tad | Male | Frog | Jock | August 3 | GCN, DnMe+, CF, NL, WA, PC, NH
Tammi | Female | Monkey | Peppy | April 2 | CF, NL, WA, PC, NH
Tammy | Female | Cub | Sisterly | June 23 | NL, WA, PC, NH
Tangy | Female | Cat | Peppy | June 17 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tank | Male | Rhino | Jock | May 6 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tarou | Male | Wolf | Jock | March 31 | DnMe+ (e-Card)
Tasha | Female | Squirrel | Snooty | November 30 | NL, WA, PC, NH
Teddy | Male | Bear | Jock | September 26 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tex | Male | Penguin | Smug | October 6 | NL, WA, PC, NH
Tiara | Female | Rhino | Snooty | July 23 | GCN, DnMe+
Tiansheng | Male | Monkey | Jock | August 18 | NH, PC
Tiffany | Female | Rabbit | Snooty | January 9 | GCN, DnMe+, CF, NL, WA, PC, NH
Timbra | Female | Sheep | Snooty | October 21 | NL, WA, PC, NH
Tipper | Female | Cow | Snooty | August 25 | WW, CF, NL, WA, PC, NH
Toby | Male | Rabbit | Smug | July 10 | WA (Amiibo), PC, NH (Amiibo)
Tom | Male | Cat | Cranky | December 10 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Truffles | Female | Pig | Peppy | July 28 | GCN, DnMe+, CF, NL, WA, PC, NH
Tucker | Male | Elephant | Lazy | September 7 | NL, WA, PC, NH
Tutu | Female | Bear | Peppy | September 15 | GCN, DnMe+, CF, NL, WA, PC, NH
Twirp | Male | Bird | Jock | May 2 | GCN, DnMe+
Twiggy | Female | Bird | Peppy | July 13 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Tybalt | Male | Tiger | Jock | August 19 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Ursala | Female | Bear | Sisterly | January 16 | GCN, DnMe+, CF, NL, WA, PC, NH
Valise | Female | Kangaroo | Snooty | November 25 | GCN, DnMe+
Velma | Female | Goat | Snooty | January 14 | GCN, DnMe+, CF, NL, WA, PC, NH
Viché | Female | Squirrel | Normal | June 16 | WA (Amiibo)
Vic | Male | Bull | Cranky | December 29 | WA, PC, NH
Victoria | Female | Horse | Peppy | July 11 | GCN, DnMe+, CF, NL, WA, PC, NH
Violet | Female | Gorilla | Snooty | September 1 | WW, CF, NL, WA, PC, NH
Vivian | Female | Wolf | Snooty | January 26 | DnMe+ (e-Card), WA, PC, NH
Vladimir | Male | Cub | Cranky | August 2 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
W. Link | Male | Wolf | Smug | December 2 | WA (Amiibo)
Wade | Male | Penguin | Lazy | October 30 | GCN, DnMe+, WA, PC, NH
Walker | Male | Dog | Lazy | June 10 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Walt | Male | Kangaroo | Cranky | April 24 | NL, WA, PC, NH
Wart Jr. | Male | Frog | Cranky | August 21 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Weber | Male | Duck | Lazy | June 30 | DnMe+ (e-Card), WA, PC, NH
Weldon | Male | Rhino | Cranky | March 16 | DnMe+ (e-Card)
Wendy | Female | Sheep | Peppy | August 15 | CF, NL, WA, PC, NH
Whitney | Female | Wolf | Snooty | September 11 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Willow | Female | Sheep | Snooty | November 26 | WA, PC, NH
Winnie | Female | Horse | Peppy | January 31 | GCN, DnMe+, CF, NL, WA, PC, NH
Wolfgang | Male | Wolf | Cranky | November 25 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Woolio | Male | Sheep | Jock | August 18 | GCN, DnMe+
Yuka | Female | Koala | Snooty | July 20 | GCN, DnMe+, WW, CF, NL, WA, PC, NH
Yodel | Female | Gorilla | Snooty | October 3 | DnMe+ (Islander)
Zell | Male | Deer | Smug | June 7 | NL, WA, PC, NH
Zoe | Female | Anteater | Normal | February 10 | GCN, DnMe+ (Islander), PC, NH (Amiibo)
Zucker | Male | Octopus | Lazy | March 8 | NL, WA, PC, NH
`;

const parseVillagers = (): Villager[] => {
  return villagerDataString
    .trim()
    .split('\n')
    .map((line) => {
      const [name, gender, species, personality, birthday, gameAppearances] = line.split('|').map(s => s.trim());
      // A few villagers have the same name, so we make a more unique ID
      const uniqueId = name === 'Carmen' && species === 'Mouse' ? 'carmen-mouse' : name.toLowerCase().replace(/ /g, '-');
      return {
        id: uniqueId,
        name,
        gender,
        species,
        personality,
        birthday,
        gameAppearances,
      } as Villager;
    });
};

export const allVillagers = parseVillagers();

export const speciesEmojiMap: { [key: string]: string } = {
  Alligator: '🐊',
  Anteater: '🐜',
  Bear: '🐻',
  Bird: '🐦',
  Bull: '🐂',
  Cat: '🐱',
  Chicken: '🐔',
  Cow: '🐮',
  Cub: '🐻',
  Deer: '🦌',
  Dog: '🐶',
  Duck: '🦆',
  Eagle: '🦅',
  Elephant: '🐘',
  Frog: '🐸',
  Goat: '🐐',
  Gorilla: '🦍',
  Hamster: '🐹',
  Hippo: '🦛',
  Horse: '🐴',
  Kangaroo: '🦘',
  Koala: '🐨',
  Lion: '🦁',
  Monkey: '🐵',
  Mouse: '🐭',
  Octopus: '🐙',
  Ostrich: '鸵',
  Penguin: '🐧',
  Pig: '🐷',
  Rabbit: '🐰',
  Rhino: '🦏',
  Sheep: '🐑',
  Squirrel: '🐿️',
  Tiger: '🐯',
  Wolf: '🐺',
};