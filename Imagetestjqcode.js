$(document).ready(function(){

    // Get parameters from url
        var url_string = window.location.href;
        var url = new URL(url_string);
        var numberOfAdults = url.searchParams.get("numberOfAdults");
        var firstName = url.searchParams.get("firstName");
        var firstGender = url.searchParams.get("firstGender");
        var seconedName = url.searchParams.get("seconedName");
        var seconedGender = url.searchParams.get("seconedGender");
        var idSubmission = url.searchParams.get("idSubmission");
        var firstOrSeconed = url.searchParams.get("firstOrSeconed");
        
        
        // find the current gender and name
        var currentGender = "";
        var currentName = "";
        
        if (firstOrSeconed == 1) {
            currentGender = firstGender;
          currentName = firstName;
        } else {
            currentGender = seconedGender;
          currentName = seconedName;
          };

        // hide loading button and image error
        $("#part2SubmitButtonLoading").hide();
        $("#errorImages").hide();


        //add current name and id to the form
        $("#idTestPart2").val(idSubmission);
        $("#NamePart2").val(currentName);

        
        // Change texts by gender
        if (currentName !== null) {
        
          $("#title-part-2").text("האישיות העיצובית של " + currentName);
          $("#successPartTwoTitle").text(" נהדר, סיימת את החלק שלך בהצלחה!" + currentName);

        };

        if (seconedName !== null) {

            $("#optionContinue").text("להמשך השאלון של " + seconedName + " במכשיר זה");
            $("#optionSend").text("לשליחת המשך השאלון ל" + seconedName + " במייל");
            if (seconedGender == "male") {
                $("#successPartTwotext").text("עכשיו נבקש מ" + seconedName + "למלא את החלק שלו.");
            } else if (seconedGender == "female") {
                $("#successPartTwotext").text("עכשיו נבקש מ" + seconedName + "למלא את החלק שלה.");
            };
            
          };
        
        if (currentGender == "male") {
        
          $("#description-part-2").text(currentName + " חלק זה של השאלון נועד עבורך. לפניך 24 תמונות ובהן קודים ויזואלים של תחושות. תחילה בחן את התמונות, ובחר אינטואיטיבית (מבלי לחשוב) את התמונה שהכי מדברת אליך. לחיצה על התמונה תסמן אותה כבחירתך הראשונה. המשך לבחור בשיטה זו את התמונות הבאות. באפשרותך לבחור משלוש עד חמש תמונות שמוצאות חן בעיניך.");
              $("#firstQ").text("בחר בסקאלה מ-1 ועד 7, עד כמה אתה רוצה להתנסות בסגנונות עיצוב חדשים או מעדיף את המוכר והידוע ( 1 - מעדיף את המוכר והידוע. 7 - רוצה להתנסות בסגנונות עיצוב חדשים)");
          $("#secondQ").text("סמן את כל סגנונות העיצוב שאתה מתחבר אליהם והיית רוצה להעניק לדירתך (אם אינך בטוח פשוט דלג על חלק זה)");
          
            } else if (currentGender == "female") {
        
          $("#description-part-2").text(currentName + " חלק זה של השאלון נועד עבורך. לפניך 24 תמונות ובהן קודים ויזואלים של תחושות. תחילה בחני את התמונות, ובחרי אינטואיטיבית (מבלי לחשוב) את התמונה שהכי מדברת אלייך. לחיצה על התמונה תסמן אותה כבחירתך הראשונה. המשיכי לבחור בשיטה זו את התמונות הבאות. באפשרותך לבחור משלוש עד חמש תמונות שמוצאות חן בעינייך.");
          $("#firstQ").text("בחרי בסקאלה מ-1 ועד 7, עד כמה את רוצה להתנסות בסגנונות עיצוב חדשים או מעדיפה את המוכר והידוע ( 1 - מעדיפה את המוכר והידוע. 7 - רוצה להתנסות בסגנונות עיצוב חדשים)");
          $("#secondQ").text("סמני את כל סגנונות העיצוב שאת מתחברת אליהם והיית רוצה להעניק לדירתך (אם אינך בטוחה פשוט דלגי על חלק זה)");
        
        };
    
    //Changing the finish div
        if (numberOfAdults == 2 && firstOrSeconed == 1) {
            $("#finishedTest").hide();
            $("#notFinishedTest").show();
        } else {
            $("#finishedTest").show();
            $("#notFinishedTest").hide();
        };
          
          
    
        
    // Calculate images    
        var n = 0, exist = -1, chosen = [];
        var x = "i0", z = 0, popupcount = 0;
        
        var multipliers = [1.6, 1.3, 1, 0.8, 0.6];
        var theChosenImage = "i0";
        var totalOfPoints = 0;
        var resultsString = "";
    
        function TestImage(control, safety, touch, growth, soft, space, rhythm, flow, elegance, power, happy, balance, spirituality) {
            this.control = control;
            this.safety = safety;
            this.touch = touch;
            this.growth = growth;
            this.soft = soft;
            this.space = space;
            this.rhythm = rhythm;
            this.flow = flow;
            this.elegance = elegance;
            this.power = power;
            this.happy = happy;
            this.balance = balance;
            this.spirituality = spirituality;
        };
    
        var lookingAtSea = new TestImage(90, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0);
        var runningStoneGirl = new TestImage(0, 0, 0, 5, 5, 0, 55, 35, 0, 0, 0, 0, 0);
        var elegantSofa = new TestImage(0, 20, 0, 0, 40, 0, 0, 0, 40, 0, 0, 0, 0);
        var rockAtSea = new TestImage(0, 0, 0, 0, 0, 0, 0, 45, 0, 55, 0, 0, 0);
        var lion = new TestImage(10, 0, 0, 0, 40, 0, 0, 0, 0, 50, 0, 0, 0);
        var lightInTheWoods = new TestImage(0, 0, 0, 60, 0, 0, 10, 5, 0, 0, 25, 0, 0);
        var stonesInBalance = new TestImage(40, 0, 10, 0, 0, 0, 10, 0, 0, 0, 0, 40, 0);
        var colorStreet = new TestImage(0, 15, 0, 10, 0, 0, 15, 10, 0, 0, 50, 0, 0);
        var balanceWaveInTheBeach = new TestImage(0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0);
        var houseWithArch = new TestImage(0, 45, 0, 15, 40, 0, 0, 0, 0, 0, 0, 0, 0);
        var roadInTheForest = new TestImage(0, 0, 0, 35, 0, 0, 0, 65, 0, 0, 0, 0, 0);
        var montserrat = new TestImage(0, 20, 0, 20, 0, 0, 0, 0, 0, 60, 0, 0, 0);
        var fieldWithSky = new TestImage(0, 30, 0, 0, 30, 40, 0, 0, 0, 0, 0, 0, 0);
        var pottery = new TestImage(0, 0, 80, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0);
        var seaLandscape = new TestImage(0, 0, 0, 0, 0, 65, 0, 25, 0, 10, 0, 0, 0);
        var tree = new TestImage(0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var couchWithGlasses = new TestImage(0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0);
        var flowers = new TestImage(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0);
        var bridge = new TestImage(0, 0, 0, 10, 0, 0, 70, 20, 0, 0, 0, 0, 0);
        var waterfalls = new TestImage(0, 0, 0, 10, 0, 0, 15, 75, 0, 0, 0, 0, 0);
        var manOnCouchReading = new TestImage(0, 70, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0);
        var bear = new TestImage(0, 20, 0, 0, 55, 0, 0, 0, 0, 25, 0, 0, 0);
        var palace = new TestImage(0, 10, 0, 20, 0, 0, 10, 0, 60, 0, 0, 0, 0);
        var cave = new TestImage(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100);
    
        var testSum = new TestImage(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    
        var imagesAndTheirNumbers = {
            i1: "couchWithGlasses",
            i2: "seaLandscape",
            i3: "cave",
            i4: "manOnCouchReading",
            i5: "roadInTheForest",
            i6: "lightInTheWoods",
            i7: "montserrat",
            i8: "flowers",
            i9: "lion",
            i10: "palace",
            i11: "lookingAtSea",
            i12: "tree",
            i13: "bear",
            i14: "houseWithArch",
            i15: "colorStreet",
            i16: "balanceWaveInTheBeach",
            i17: "pottery",
            i18: "stonesInBalance",
            i19: "fieldWithSky",
            i20: "bridge",
            i21: "rockAtSea",
            i22: "waterfalls",
            i23: "elegantSofa",
            i24: "runningStoneGirl",
        };
        
      $("#popupx").click(function(){
          $(".popuptest").stop();
          $(".popuptest").fadeOut(300);
      });
      
      $(".imagediv").click(function(){
    
          for (i = 0; i < chosen.length; i++) {
              if (chosen[i] == $(this).attr('id')) {
                  exist = i;
              }
          }
    
          if ( exist !== -1) {
              $(this).find("div.imagetexttag").fadeToggle(300);
              chosen.splice(exist, 1);
              n--;
              if (exist !== chosen.length) {
                for (m = exist; m < chosen.length; m++) {
                    x = '#' + chosen[m];
                    z = m + 1;
                    $(x).find("div.imagetextnumber").fadeOut(150).text(z).fadeIn(150);
                    }
                  }
              exist = -1;
          } else {
              if (n < 5) {
                  chosen[n] = $(this).attr('id');
                  if (n == 0 && popupcount == 0) {
                  $(".popuptest").stop();
                  if (currentGender == "male") {

                    $(".popuptest").find("div.popuptesttext").text("מצויין! בחרת את התמונה שאתה הכי מתחבר אליה. המשך ובחר את התמונה הבאה");       
    
                  } else if (currentGender == "female") {
                  
                    $(".popuptest").find("div.popuptesttext").text("מצויין! בחרת את התמונה שאת הכי מתחברת אליה. המשיכי ובחרי את התמונה הבאה"); 
                  
                  } else {
                    $(".popuptest").find("div.popuptesttext").text("מצויין! בחרתם את התמונה שאתם הכי מתחברים אליה. המשיכו ובחרו את התמונה הבאה");
                  };
                  $(".popuptest").fadeIn(300).delay(6000).fadeOut(300);
                  popupcount++;
                  }
                  if (n == 2 && popupcount == 1) {
                  $(".popuptest").stop();
                  if (currentGender == "male") {

                    $(".popuptest").find("div.popuptesttext").text("בחרת שלוש תמונות, אתה יכול לסיים עכשיו או לבחור תמונה אחת או שתיים נוספות");       
    
                  } else if (currentGender == "female") {
                  
                    $(".popuptest").find("div.popuptesttext").text("בחרת שלוש תמונות, את יכולה לסיים עכשיו או לבחור תמונה אחת או שתיים נוספות");  
                  
                  } else {
                    $(".popuptest").find("div.popuptesttext").text("בחרתם שלוש תמונות, אתם יכולים לסיים עכשיו או לבחור תמונה אחת או שתיים נוספות"); 
                  };
                  $(".popuptest").fadeIn(300).delay(6000).fadeOut(300);
                  popupcount++;
                  }
                  if (n == 4 && popupcount == 2) {
                  $(".popuptest").stop();
                  if (currentGender == "male") {

                    $(".popuptest").find("div.popuptesttext").text("בחרת חמש תמונות! אם תרצה לשנות את אחת מבחירותיך, לחץ על התמונה בכדי לבטל");       
    
                  } else if (currentGender == "female") {
                  
                    $(".popuptest").find("div.popuptesttext").text("בחרת חמש תמונות! אם תרצי לשנות את אחת מבחירותייך, לחצי על התמונה בכדי לבטל");  
                  
                  } else {
                    $(".popuptest").find("div.popuptesttext").text("בחרתם חמש תמונות! אם תרצו לשנות את אחת מבחירותיכם, לחצו על התמונה בכדי לבטל");   
                  };
                  $(".popuptest").fadeIn(300).delay(6000).fadeOut(300);
                  popupcount++;
                  }
                  n++;
                  if (n > 2) {
                    $("#errorImages").hide();
                  }
                  $(this).find("div.imagetexttag").fadeToggle(300);
                  $(this).find("div.imagetextnumber").text(n);
              } else {
                  $(".popuptest").stop();
                  if (currentGender == "male") {

                    $(".popuptest").find("div.popuptesttext").text("לא ניתן לבחור יותר מחמש תמונות. אם תרצה לשנות את אחת מבחירותיך, לחץ על התמונה בכדי לבטל");       
    
                  } else if (currentGender == "female") {
                  
                    $(".popuptest").find("div.popuptesttext").text("לא ניתן לבחור יותר מחמש תמונות. אם תרצי לשנות את אחת מבחירותייך, לחצי על התמונה בכדי לבטל");
                  
                  } else {
                    $(".popuptest").find("div.popuptesttext").text("לא ניתן לבחור יותר מחמש תמונות. אם תרצו לשנות את אחת מבחירותיכם, לחצו על התמונה בכדי לבטל");
                  };
                  $(".popuptest").fadeIn(300).delay(6000).fadeOut(300);
                  popupcount++;
              }
          }
      });
      // Submiting part 2
      $("#part2SubmitButton2").click(function(){

        //check number of images
        if ( n <  3) {
            if (currentGender == "male") {

                $("#errorImages").text("* בחר בין 3 ל-5 תמונות בכדי להמשיך");
                $("#errorImages").show();        

            } else if (currentGender == "female") {
              
                $("#errorImages").text("* בחרי בין 3 ל-5 תמונות בכדי להמשיך");
                $("#errorImages").show();  
              
            };
        
        return;
        
        };

        $("#part2SubmitButton2").hide();
        $("#part2SubmitButtonLoading").show();

        var totalOfPoints = 0;
        var resultsString = "";
        //calculate result
        for (j = 0; j < chosen.length; j++) {
            theChosenImage = eval(imagesAndTheirNumbers[chosen[j]]);

             for (k in theChosenImage) {
                  testSum[k] = testSum[k] + (theChosenImage[k] * multipliers[j]);
                  totalOfPoints = totalOfPoints + (theChosenImage[k] * multipliers[j]);
             }
        }
        for (l in testSum) {
        resultsString = resultsString.concat(l, ": ", testSum[l] / totalOfPoints, "\n")
          }
         $('#testResult').val(resultsString);
         $("#wf-form-seconed-part").submit();
      });

      
      //change continue buttons urls
          $('#wf-form-seconed-part').submit(function() {
            $(document).ajaxSuccess(function(){
              var nextLink = '/part2'
              + '?numberOfAdults=' + numberOfAdults
              + '&firstName=' + firstName
              + '&firstOrSeconed=2'
              + '&firstGender=' + firstGender
              + '&seconedName=' + seconedName
              + '&seconedGender=' + seconedGender
              + '&idSubmission=' + idSubmission;

              $("#bContinue").attr("href", nextLink);
              $("#bSend").attr("href", "mailto:?to=&body=היי " + seconedName + " לחץ על הלינק בכדי למלא את החלק שלך בשאלון - " + nextLink + ",&subject=לינק לשאלון האישיות העיצובית של " + seconedName);
            });	    
        });
      
    });