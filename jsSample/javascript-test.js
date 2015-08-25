var animals = ["Lemur","Salamander","Alligator","Vervet","Camel","Eagle","Gazelle","Hippopotamus","Jackal","Ibis","Deer","Baboon",
				"Kangaroo","Falcon","Narwhal","Octopus","Zebra","Panther","Manatee","Raccoon","Quail","Unau","Walrus","X-ray fish","Yabby","Tiger"];

function populateAnimalSelect()
{
	var selectionBox = document.getElementById("sel-animal-start");
	var selectAnimals = getAnimalsSortedAlphaA();
	for(var i=0; i < animals.length; i++)
	{
		selectionBox[selectionBox.length] = new Option(selectAnimals[i],selectAnimals[i]);
	}
}

function outputAnimals()
{
	var animalDisplay = document.getElementById("animalDisplay");
	
	animalDisplay.innerHTML = "";
	
	for(var i=0; i < animals.length; i++)
	{
		animalDisplay.innerHTML += animals[i] + "<br>";
	}
}

function shuffleAnimals()
{
	animals.sort(randomBool)
}

function sortAnimalsAlphaA()
{
	animals.sort();
}

function sortAnimalsAlpha(animal)
{
	var sortedAnimals = getAnimalsSortedAlphaA();
	
	var index = sortedAnimals.indexOf(animal);
	if(index === -1)
	{
		console.warn(animal +"not found in animals[], animals[] is unchanged.");
		return;
	}
	
	for(var i = 0;i<sortedAnimals.length;i++)
	{
		animals[i] = sortedAnimals[ (i + index) % sortedAnimals.length ];
	}
}

function sortAnimalsCharCount()
{
	animals.sort(charLengthSort);
}

function sortAnimalsAlphaLastChar()
{
	var lastCharAnimals = getAnimalsSortedAlphaA();
	for(var i=0; i< lastCharAnimals.length; i++)
	{
		lastCharAnimals[i] = reverseWord(lastCharAnimals[i]);
	}

	lastCharAnimals.sort();
	
	for(var i=0; i< lastCharAnimals.length; i++)
	{
		lastCharAnimals[i] = reverseWord(lastCharAnimals[i]);
	}
	
	animals = lastCharAnimals;
}

function sortAnimalsConsonantCount()
{
	animals.sort(consonantCountCompare);
}

function sortAnimalsVowelCount()
{
	animals.sort(vowelCountCompare);
}


function getAnimalsSortedAlphaA()
{
	//returns alpha sorted copy of animals array without changing original
	var animalsCopy = animals.concat();
	animalsCopy.sort();
	return animalsCopy;
}


function randomBool()
{
	return Math.random() > 0.5;
}

function charLengthSort(a,b)
{
	return a.length - b.length;
}

function reverseWord(word)
{
	if( ( /[^\w\s\-]/ ).test(word) )
	{
		console.warn("reverseWord may behave strangely with non-alphabet characters");
	}
	return word.split("").reverse().join("");
}

function vowelCountCompare(a,b)
{
	return vowelCount(a) - vowelCount(b);
}

function consonantCountCompare(a,b)
{
	return consonantCount(a) - consonantCount(b);
}

function vowelCount(word)
{
	var vowels = word.match(/[aeiou]/gi);
	if(!vowels)
	{
		return 0;
	}
	return vowels.length;
}

function consonantCount(word)
{
	if( ( /[^\w\s\-]/ ).test(word) )
	{
		console.warn("consonantCount may behave strangely with non-alphabet characters");
	}
	var consonants = word.match(/[^aeiou\s\-]/gi);
	if(!consonants)
	{
		return 0;
	}
	return consonants.length;
}