document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // الحصول على القيم من الحقول
    const weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    let height1 = height

    console.log("الطول" + height1);


    let idealWeight;
    let bmr;
    // تحقق من الجنس واحسب الوزن المثالي
    if (gender === "male") {
        // للرجال
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female" || gender === "brgnet1" || gender === "brgnet2" || gender === "brgnet3" || gender === "mama") {
        // للنساء
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    else if (gender === "bebe1-3") {
        // للنساء
        bmr = 80 * weight;
    }
    else if (gender === "bebe4-5") {
        // للنساء
        bmr = 70 * weight;
    }
    else if (gender === "bebe6-8") {
        // للنساء
        bmr = 60 * weight;
    }
    else if (gender === "bebe6-8!") {
        // للنساء
        bmr = 65 * weight;
    }
    else if (gender === "bebe9-18") {
        // للنساء
        bmr = 35 * weight;
    }
    else if (gender === "bebe9-18!") {
        // للنساء
        bmr = 45 * weight;
    }



















    // } else if (gender === "brgnet1") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "brgnet2") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "brgnet3") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "mama") {
    //     // للنساء
    //     idealWeight = (height1 - 100) - (height1 - 150) / 2 ;
    // }




    console.log("الوزن المثالي" + idealWeight);









    // حساب BMR





    // حساب TDEE
    let tdee = 0;
    // bmr * activityLevel


    if (gender === 'male') {
        tdee = bmr * activityLevel;
    } else if (gender === 'female') {
        tdee = bmr * activityLevel
    }



    if (gender === 'brgnet1') {
        tdee = bmr * activityLevel + 50;
    } else if (gender === "brgnet2") {
        tdee = bmr * activityLevel + 250;
    } else if (gender === "brgnet3") {
        tdee = bmr * activityLevel + 450;
    } else if (gender === "mama") {
        tdee = bmr * activityLevel + 500;
    }
    else if (gender === "bebe1-3") {
        tdee = bmr;
    }
    else if (gender === "bebe4-5") {
        tdee = bmr;
    }
    else if (gender === "bebe6-8") {
        tdee = bmr;
    }
    else if (gender === "bebe6-8!") {
        tdee = bmr;
    }
    else if (gender === "bebe9-18") {
        tdee = bmr;
    } else if (gender === "bebe9-18!") {
        tdee = bmr;
    }
    const proteinInput = parseFloat(document.getElementById('protein-input').value);
    const fatInput = parseFloat(document.getElementById('fat-input').value);
    // const carbsInput = parseFloat(document.getElementById('carbs-input').value);

    // توزيع الماكروز
    let proteinCalories = 0; // 30% للبروتين

    // تأكد من أن المتغيرات tdee و proteinInput و weight معرفة مسبقًا
    if (gender === "male" || gender === "female" || gender === "bebe1-3" || gender === "bebe4-5" || gender === "bebe6-8" || gender === "bebe6-8!" || gender === "bebe9-18" || gender === "bebe9-18!") {
        proteinCalories = tdee * proteinInput; // حساب السعرات الحرارية للبروتين
    } else {
        proteinCalories = weight * proteinInput * 4; // حساب السعرات الحرارية للبروتين
    }

    // console.log("proteinGrams:", proteinGrams);

    console.log("proteinCalories:", proteinCalories);
    // طباعة قيمة الوزن بدلاً من النص الثابت
    console.log("Weight:", weight);

    const fatCalories = tdee * fatInput;    // 25% للدهون
    const carbCalories = tdee - (proteinCalories + fatCalories);

    console.log("tdee:", weight);






    let proteinGrams = 0
    // proteinCalories / 4; // 1 جرام بروتين = 4 سعرات


    if (gender === "male" || gender === "female" || gender === "bebe1-3" || gender === "bebe4-5" || gender === "bebe6-8" || gender === "bebe6-8!" || gender === "bebe9-18" || gender === "bebe9-18!") {
        proteinGrams = proteinCalories / 4; // حساب السعرات الحرارية للبروتين
    } else {
        proteinGrams = proteinCalories / 4; // حساب السعرات الحرارية للبروتين
    }






    const fatGrams = fatCalories / 9;        // 1 جرام دهون = 9 سعرات
    const carbGrams = carbCalories / 4;     // 1 جرام كربوهيدرات = 4 سعرات








    // عرض النتائج
    document.getElementById('calories-result').textContent = `احتياجك اليومي: ${Math.round(tdee)} سعر حراري.`;
    document.getElementById('macros-result').textContent =
        `البروتين: ${Math.round(proteinGrams)} جم، الدهون: ${Math.round(fatGrams)} جم، الكربوهيدرات: ${Math.round(carbGrams)} جم.`;




    function distributeExchanges(carbs, protein, fats) {
        // القيم التغذوية لكل بديل
        const dairy = { carbs: 12, protein: 8, fats: 0 };
        const vegetables = { carbs: 5, protein: 2, fats: 0 };
        const bread = { carbs: 15, protein: 2, fats: 0 };
        const fruits = { carbs: 15, protein: 0, fats: 0 };
        const meat = { carbs: 0, protein: 7, fats: 3 };
        const fatsGroup = { carbs: 0, protein: 0, fats: 5 };



        let dairyServings = parseInt(document.getElementById('dairy-servings').value);
        let vegetableServings = parseInt(document.getElementById('vegetable-servings').value);
        // let breadServings = parseInt(document.getElementById('bread-servings').value);
        let fruitServings = parseInt(document.getElementById('fruit-servings').value);



        // عدد الحصص الثابتة للألبان والخضراوات
        dairyServings = dairyServings;
        vegetableServings = vegetableServings;
        fruitServings = fruitServings
        // حساب المغذيات المخصصة للألبان والخضراوات
        const dairyCarbs = dairyServings * dairy.carbs;
        const dairyProtein = dairyServings * dairy.protein;
        const dairyFats = dairyServings * dairy.fats;

        const vegetableCarbs = vegetableServings * vegetables.carbs;
        const vegetableProtein = vegetableServings * vegetables.protein;

        const fruitcarb = fruitServings * fruits.carbs;
        // const breadProtein = breadServings * bread.protein;


        // طرح المغذيات المخصصة للألبان والخضراوات من الإجمالي
        carbs -= (dairyCarbs + vegetableCarbs + fruitcarb);
        protein -= (dairyProtein + vegetableProtein);
        fats -= dairyFats;

        // التأكد من أن الكميات غير سالبة
        // carbs = Math.max(0, carbs);
        // protein = Math.max(0, protein);
        // fats = Math.max(0, fats);

        // توزيع باقي الكربوهيدرات على الخبز والفاكهة
        // let breadServings = Math.floor(protein / bread.protein ); // كل بديل خبز يحتوي على 15 كربوهيدرات و2 بروتين و1 دهون
        // carbs -= breadServings * bread.carbs;
        // protein -= breadServings * bread.protein;
        // fats -= breadServings * bread.fats;

        let breadServings = (carbs / bread.carbs).toFixed(2); // كل بديل فاكهة يحتوي على 15 كربوهيدرات
        protein -= breadServings * bread.protein;
        // توزيع باقي البروتين على اللحوم
        let meatServings = (protein / meat.protein).toFixed(2); // كل بديل لحوم يحتوي على 7 بروتين و5 دهون
        protein -= meatServings * meat.protein;
        fats -= meatServings * meat.fats;

        // توزيع باقي الدهون على بدائل الدهون
        let fatsServings = (fats / fatsGroup.fats).toFixed(2); // كل بديل دهون يحتوي على 5 دهون

        // النتائج
        return {
            dairy: dairyServings,
            vegetables: vegetableServings,
            bread: breadServings,
            fruits: fruitServings,
            meat: meatServings,
            fats: fatsServings
        };
    }

    // طلب القيم من المستخدم
    // const carbs = parseFloat(prompt("أدخل كمية الكربوهيدرات (جم):"));
    // const protein = parseFloat(prompt("أدخل كمية البروتين (جم):"));
    // const fats = parseFloat(prompt("أدخل كمية الدهون (جم):"));

    // حساب التوزيع
    const results = distributeExchanges(carbGrams, proteinGrams, fatGrams);

    // عرض النتائج
    console.log("توزيع الحصص:");
    console.log(`- الألبان: ${results.dairy} حصص`);
    console.log(`- الخضراوات: ${results.vegetables} حصص`);
    console.log(`- الخبز: ${results.bread} حصص`);
    console.log(`- الفاكهة: ${results.fruits} حصص`);
    console.log(`- اللحوم: ${results.meat} حصص`);
    console.log(`- الدهون: ${results.fats} حصص`);

    document.getElementById("ss").innerHTML = ` الوزن المثالي: ${idealWeight} `
    document.getElementById("bdel").innerHTML = ` الألبان: ${results.dairy} حصص` + " " + ` الخضراوات: ${results.vegetables} حصص` + " " + ` الخبز: ${results.bread} حصص` + " " + ` الفاكهة: ${results.fruits} حصص` + " " + ` اللحوم: ${results.meat} حصص` + " " + ` الدهون: ${results.fats} حصص`
    const numfood = parseFloat(document.getElementById('numfood').value);

    const dairy = document.getElementById("dairy")
    dairy.innerHTML = "حصص الألبان:" +
        `<br>زبادي: ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.dairy * 1 * 1 / numfood).toFixed(1)}كوب ` +

        `<br>اللبن: ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.dairy * 1 * 1 / numfood).toFixed(1)}   كوب  `
        +
        `<br> لبن رايب : ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.dairy * 1 * 1 / numfood).toFixed(1)}كوب `

        +
        `<br> لبن جاف: ${(results.dairy * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.dairy * 0.33 * 1 / numfood).toFixed(1)}كوب `

    const fruits = document.getElementById("fruits")
    fruits.innerHTML = "حصص الفاكهة:" +
        `<br> تمر: ${(results.fruits * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 3 * 1 / numfood).toFixed(1)}حبة `

        +
        `<br> تفاح كبيرة: ${(results.fruits * 250 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1 * 1 / numfood).toFixed(1)}حبة `

        +
        `<br> مشمش متوسطة: : ${(results.fruits * 140 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 4 * 1 / numfood).toFixed(1)}حبة `

        +
        `<br> عنب صغيرة : ${(results.fruits * 75 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 15 * 1 / numfood).toFixed(1)}حبة ` +
        `<br>  موزة متوسطة: ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> شمام : ${(results.fruits * 300 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.33 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> كرز : ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 12 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> تين : ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 2 * 1 / numfood).toFixed(1)}حبة ` +
        `<br>  جريب فروت : ${(results.fruits * 175 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> كيوي : ${(results.fruits * 100 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> مانجو : ${(results.fruits * 125 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> خوخ متوسطة : ${(results.fruits * 150 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> كمثرى متوسطة : ${(results.fruits * 175 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> اناناس : ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.75 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> رمان : ${(results.fruits * 90 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> فراولة : ${(results.fruits * 75 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> مشمش معلب : ${(results.fruits * 70 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 4 * 1 / numfood).toFixed(1)}انصاف ` +
        `<br>   كرز معلب: ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> فواكه مشكلة معلبة : ${(results.fruits * 125 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> أناناس معلب : ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.33 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> تفاح مجفف : ${(results.fruits * 25 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 4 * 1 / numfood).toFixed(1)}حلقات ` +
        `<br>  مشمش مجفف: ${(results.fruits * 50 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 6 * 1 / numfood).toFixed(1)}حلقات ` +
        `<br> تين مجفف : ${(results.fruits * 55 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 1.5 * 1 / numfood).toFixed(1)}حبة ` +
        `<br> زبيب : ${(results.fruits * 20 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 2 * 1 / numfood).toFixed(1)}ملعقة طعام ` +
        `<br> عصير تفاح : ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> عصير جريب فروت : ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> عصير برتقال : ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> عصير اناناس : ${(results.fruits * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> عصير عنب : ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.33 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> عصير توت بري : ${(results.fruits * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fruits * 0.33 * 1 / numfood).toFixed(1)}كوب `











    const vegetables = document.getElementById("vegetables");
    vegetables.innerHTML = " حصص الخضار:" + "كوب  نيء او نصف كوب مطهي" +
        `<br>  خضار مشكل: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي `

        +
        `<br> الفاصوليا: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي `
        +
        `<br> القرع: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الكرنب: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الملفوف: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الكوسا: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br>البنجر : ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br>الجزر : ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> زهرة القرنبيط: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> البروكلي: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> باذنجان: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الكراث: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الفطر: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> البامية: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> البصل: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> بازلاء: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الفلفل: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> السبانخ: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الملوخية: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br> الطماطم: ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        `<br>اللفت : ${(results.vegetables * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي ` +
        "<br>الخضراوات التالية غير محسوبة " + "<br> بقدونس -خس-كرفس-خيار-بصل اخضر-فلفل حار-فجل "
















    const bread = document.getElementById("bread");
    bread.innerHTML = " حصص خبز:" +
        `<br> شوفان او جريش او سميد او برغل: ${(results.bread * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> معكرونة  : ${(results.bread * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.5 * 1 / numfood).toFixed(1)}كوب ` +
        `<br> ارز ابيض او اسمر: ${(results.bread * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.33 * 1 / numfood).toFixed(1)}كوب مطهي` +
        `<br> كسكسي: ${(results.bread * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.33 * 1 / numfood).toFixed(1)}كوب مطهي` +
        `<br> خبز: ${(results.bread * 30 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.33 * 1 / numfood).toFixed(1)}رغيف ` +
        `<br> توست: ${(results.bread * 30 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 1 * 1 / numfood).toFixed(1)} شريحة` +
        `<br> ذرة: ${(results.bread * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي` +
        `<br> فشار: ${(results.bread * 720 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 3 * 1 / numfood).toFixed(1)} كوب مطهي بالميكرويف` +
        `<br> كورن فليكس: ${(results.bread * 180 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.75 * 1 / numfood).toFixed(1)}كوب ` +
        `<br>بطاطس : ${(results.bread * 120 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 0.5 * 1 / numfood).toFixed(1)}كوب مطهي` +
        `<br> بسكوت نخالة: ${(results.bread * 40 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.bread * 1 * 1 / numfood).toFixed(1)}حبة `



    const meat = document.getElementById("meat")
    meat.innerHTML = "حصص لحوم:" +
        `<br> تونة او سالمون: ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 6 * 1 / numfood).toFixed(1)}ملعقة ` +
        `<br>  سردين بدون زيت : ${(results.meat * 170 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 3 * 1 / numfood).toFixed(1)}حبة متوسطة ` +
        `<br>   جمبري او سبيط (كالماري): ${(results.meat * 170 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 5 * 1 / numfood).toFixed(1)}قطعة متوسطة ` +

        `<br>    سمك دهني : ${(results.meat * 30 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)} قطعة `
        +
        `<br>   لحم احمر  : ${(results.meat * 30 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)} قطعة ` +
        `<br>    لحم ابيض (دواجن) : ${(results.meat * 30 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)} قطعة ` +
        `<br>   كبدة بانواعها  : ${(results.meat * 25 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)} قطعة ` +
        `<br>   عدس  : ${(results.meat * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.33 * 1 / numfood).toFixed(1)} كوب مطهي ` +
        `<br>    لوبيا : ${(results.meat * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.33 * 1 / numfood).toFixed(1)} كوب مطهي ` +
        `<br>    فول : ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.25 * 1 / numfood).toFixed(1)} كوب مطهي ` +
        `<br>    فاصوليا  : ${(results.meat * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.33 * 1 / numfood).toFixed(1)} كوب مطهي ` +
        `<br>   جبن قليل الدسم  : ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.25 * 1 / numfood).toFixed(1)}  قطعة ` +
        `<br>   مثلث جبن قليل الدسم  : ${(results.meat * 18 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)} حبه  ` +
        `<br>   بارميزان  : ${(results.meat * 20 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 2 * 1 / numfood).toFixed(1)}  ملعقة طعام ` +
        `<br>   جبن قريش  : ${(results.meat * 80 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.25 * 1 / numfood).toFixed(1)}  قطعة ` +
        `<br>    جبن حلوم قليل الدسم : ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 0.25 * 1 / numfood).toFixed(1)}  قطعة ` +
        `<br>    لبنة قليل الدسم : ${(results.meat * 20 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 2 * 1 / numfood).toFixed(1)}  ملعقة طعام ` +
        `<br>   بيضة  : ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)}  حبة ` +
        `<br>    بياض بيضتين : ${(results.meat * 60 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.meat * 1 * 1 / numfood).toFixed(1)}  واحد `

    const fats = document.getElementById("fats")
    fats.innerHTML = "حصص الدهون:" +
        `<br> زيت زيتون: ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> زيت عباد شمس : ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> زبده او سمنه : ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> سمسم: ${(results.fats * 10 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 2 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> طحينه السمسم: ${(results.fats * 10 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 2 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> زيتون: ${(results.fats * 35 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 8 * 1 / numfood).toFixed(1)}  حبه` +
        `<br> مكسرات (لوز او كاجو): ${(results.fats * 8 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 6 * 1 / numfood).toFixed(1)} حبه ` +
        `<br> فول سوداني: ${(results.fats * 7 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 10 * 1 / numfood).toFixed(1)} حبه ` +
        `<br> زبدةالفول السوداني: ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> مايونيز لايت: ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> قشطة: ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> تتبيلة السلطة: ${(results.fats * 5 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 1 * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
        `<br> زيت جوز هند: ${(results.fats * 10 * 1 / numfood).toFixed(1)}   جرام  ` + `<br> ${(results.fats * 2 * 1 / numfood).toFixed(1)} ملعقة صغيرة`








        document.addEventListener("DOMContentLoaded", function () {
            const printButton = document.getElementById("printButton");
          
            if (printButton) {
              printButton.addEventListener("click", function () {
                // Get the current text content of each section
                const dairyText = document.getElementById("dairy").innerText;
                const fruitsText = document.getElementById("fruits").innerText;
                const vegetablesText = document.getElementById("vegetables").innerText;
                const breadText = document.getElementById("bread").innerText;
                const meatText = document.getElementById("meat").innerText;
                const fatsText = document.getElementById("fats").innerText;

                // Check if pdfMake is available
                if (typeof pdfMake === 'undefined') {
                  alert('PDF printing library is not loaded. Please check your internet connection or page setup.');
                  return;
                }

                const docDefinition = {
                  content: [
                    { text: "قائمة المشتريات", style: "header" },
                    { text: dairyText, style: "section" },
                    { text: fruitsText, style: "section" },
                    { text: vegetablesText, style: "section" },
                    { text: breadText, style: "section" },
                    { text: meatText, style: "section" },
                    { text: fatsText, style: "section" },
                  ],
                  styles: {
                    header: {
                      fontSize: 20,
                      bold: true,
                      alignment: "center",
                      margin: [0, 0, 0, 20]
                    },
                    section: {
                      fontSize: 12,
                      margin: [0, 5, 0, 5]
                    }
                  },
                  defaultStyle: {
                    font: "Cairo",
                  },
                };
  
                pdfMake.createPdf(docDefinition).download("قائمة.pdf");
              });
            }
        });
          


});
