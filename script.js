
  
      
      // Generate prompt function
      function generatePrompt() {
        // Insert your Airtable API key, base ID, and table name here
        var airtable_api_key = "key8SJ7g5Hhytq4g4";
        var airtable_base_id = "appTY4GFqZStNO0g5";
        var airtable_table_name = "tblMMbihGl5ZRRsuP";

        // Disable the generate button after click
    document.getElementById("generateBtn").disabled = true;
        
        // Construct the URL for the Airtable API request
        var url = "https://api.airtable.com/v0/" + airtable_base_id + "/" + airtable_table_name + "?view=Grid%20view";
        
        // Send the GET request to the Airtable API
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Authorization", "Bearer " + airtable_api_key);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // Parse the response JSON and choose a random prompt
            var response = JSON.parse(xhr.responseText);
            var records = response.records;
            var random_prompt = records[Math.floor(Math.random() * records.length)];
            var prompt = random_prompt.fields["Prayers"];
            
            // Display the prompt
            document.getElementById("prompt").innerHTML = prompt;

            // call the timer
            timer();
          }
        };
        xhr.send();
       
      }

     function timer(){

         // Set the timer for 1 minute
         var timeleft = 60;
      var downloadTimer = setInterval(function(){
        document.getElementById("timer").innerHTML = "00:" + timeleft;
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
        }
      }, 1000);

}


         
      
      // Function to go to index page
      function goToIndexPage() {
        window.location.href = "index.html";
      }
 