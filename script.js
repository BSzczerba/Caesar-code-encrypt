function Calculate()
{
	const text = document.getElementById("input").value;
	const number = parseInt(document.getElementById("shift-amount").value);
	const output = document.getElementById("output");	
	let result = "";
	if(text === '')
	{
        output.value = "Please provide a valid text";
        
    } else if (isNaN(number)){	
        output.value = "Please provide a valid shift number";
    }
	else
	{
		for (let i = 0; i < text.length; i++)
		{
			if(!/[a-zA-Z]/.test(text[i]))
			{
				result += text[i];
			}				
			else if (text[i] == text[i].toUpperCase())
			{
				result += String.fromCharCode((text.charCodeAt(i) + number - 65) % 26 + 65);
			}
            else
			{		
				
				result += String.fromCharCode((text.charCodeAt(i) + number - 97) % 26 + 97);
			}            
		}
		output.value = result;
	}
}