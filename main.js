document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // الحصول على القيم من الحقول
    const weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
    document.getElementById("power").innerHTML = `${activityLevel} النشاط: `;
    const name = document.getElementById("name").value;
    let height1 = height
const pn = document.getElementById("pn").value;
document.getElementById("pnn").innerHTML = ` ${pn}  سعرات فرق  `;
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






  // الحصول على القيم من المدخلات
                 
                    
                    
                    
                    
const heightInMeters = height / 100;
const bmi = weight / (heightInMeters * heightInMeters);
const roundedBMI = bmi.toFixed(2);

// حساب الوزن المثالي (للبالغين والحوامل فقط)
let idealWeightInfo = "";
if (gender === 'male' || gender === 'female' || gender.startsWith('brgnet')) {
    idealWeight = gender === 'male' 
        ? 50 + 0.91 * (height - 152.4) 
        : 45.5 + 0.91 * (height - 152.4);
    
    const lowerRange = (idealWeight * 0.9).toFixed(1);
    const upperRange = (idealWeight * 1.1).toFixed(1);
    idealWeightInfo = ` كجم ${idealWeight.toFixed(1)} المثالي الوزن  
    كجم   ${lowerRange}  ${upperRange} الصحي المدى`;

    
} else if (gender.startsWith('bebe')) {
    // لا يتم حساب الوزن المثالي للأطفال
    idealWeightInfo = "";
}

// تحديد حالة الوزن (لا ينطبق على الرضع)
let status = "";
if (gender.startsWith('bebe')) {
    status = " للرضع لا ";
} else {
    if (bmi < 18.5) status = "الوزن نقص ";
    else if (bmi < 25) status = "طبيعي وزن ";
    else if (bmi < 30) status = "الوزن زيادة  ";
    else status = "سمنة";
}

// عرض النتائج حسب الفئة
if (gender === 'male' || gender === 'female' || gender.startsWith('brgnet')) {
    document.getElementById('bmi').innerHTML = 
        ` ${roundedBMI} (BMI) <br> ${status} الحالة  `;
    document.getElementById('ideal-weight').textContent = idealWeightInfo;
}
else if (gender.startsWith('bebe')) {
    // لا يتم عرض أي رسالة لمؤشر كتلة الجسم أو الوزن المثالي للأطفال
    document.getElementById('bmi').innerHTML = "BMI 0";
    document.getElementById('ideal-weight').textContent = "0 مثالي  وزن";
}
// const heightInMeters = height / 100;
            
// // حساب مؤشر كتلة الجسم
// const bmi = weight / (heightInMeters * heightInMeters);
            
// // تقريب النتيجة إلى منزلتين عشريتين
// const roundedBMI = bmi.toFixed(2);
            
// // الحصول على قيمة الجنس

// // التحقق من أن الجنس Male أو Female فقط
// if (gender === "male" || gender === "female") {
//     // تحديد حالة الوزن
//     let status = "";
//     if (bmi < 18.5) {
//         status = "نقص في الوزن";
//     } else if (bmi >= 18.5 && bmi < 25) {
//         status = "وزن طبيعي";
//     } else if (bmi >= 25 && bmi < 30) {
//         status = "زيادة في الوزن";
//     } else {
//         status = "سمنة";
//     }
    
//     // عرض النتيجة فقط إذا كان الجنس Male أو Female
//     document.getElementById('bmi').innerHTML = 
//         `مؤشر كتلة الجسم (BMI) الخاص بك هو: <span style="color: #4CAF50;">${roundedBMI}</span><br>الحالة: ${status}`;
// } else if{
//     // لا تعرض أي شيء إذا لم يكن Male أو Female
//     document.getElementById('bmi').innerHTML = "";
// }




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


    const pnValue = parseFloat(pn); // Convert pn to a number

    if (gender === 'male') {
        tdee = bmr * activityLevel + pnValue;
    } else if (gender === 'female') {
        tdee = bmr * activityLevel + pnValue;
    }

    if (gender === 'brgnet1') {
        tdee = bmr * activityLevel + 50 + pnValue;
    } else if (gender === "brgnet2") {
        tdee = bmr * activityLevel + 250 + pnValue;
    } else if (gender === "brgnet3") {
        tdee = bmr * activityLevel + 450 + pnValue;
    } else if (gender === "mama") {
        tdee = bmr * activityLevel + 500 + pnValue;
    } else if (gender === "bebe1-3") {
        tdee = bmr + pnValue;
    } else if (gender === "bebe4-5") {
        tdee = bmr + pnValue;
    } else if (gender === "bebe6-8") {
        tdee = bmr + pnValue;
    } else if (gender === "bebe6-8!") {
        tdee = bmr + pnValue;
    } else if (gender === "bebe9-18") {
        tdee = bmr + pnValue;
    } else if (gender === "bebe9-18!") {
        tdee = bmr + pnValue;
    }
    const proteinInput = parseFloat(document.getElementById('protein-input').value);
    const fatInput = parseFloat(document.getElementById('fat-input').value);
    // const carbsInput = parseFloat(document.getElementById('carbs-input').value);
document.getElementById("fatandproteinInput").innerHTML = ` ${fatInput} الدهون توزيع
 ${proteinInput} البروتين توزيع  `; 
    // توزيع الماكروز
    let proteinCalories = 0; // 30% للبروتين

    // تأكد من أن المتغيرات tdee و proteinInput و weight معرفة مسبقًا
    if (gender === "male" || gender === "female" || gender === "bebe1-3" || gender === "bebe4-5" || gender === "bebe6-8" || gender === "bebe6-8!" || gender === "bebe9-18" || gender === "bebe9-18!") {
        proteinCalories = tdee * proteinInput; // حساب السعرات الحرارية للبروتين
    } else {
        proteinCalories = idealWeight * proteinInput * 4; // حساب السعرات الحرارية للبروتين
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
        `  البروتين: ${Math.round(proteinGrams)} جم، الدهون: ${Math.round(fatGrams)} جم، الكربوهيدرات: ${Math.round(carbGrams)} جم.`;


    function distributeExchanges(carbs, protein, fats) {
        // القيم التغذوية لكل بديل
        const dairy = { carbs: 12, protein: 8, fats: 0 };
        const vegetables = { carbs: 5, protein: 2, fats: 0 };
        const bread = { carbs: 15, protein: 2, fats: 0 };
        const fruits = { carbs: 10, protein: 0, fats: 0 };
        const meat = { carbs: 0, protein: 5, fats: 3 };
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
    document.getElementById("meal3").innerHTML = ` ${numfood} : الوجبات  عدد  `
    const dairy = document.getElementById("dairy")
    dairy.innerHTML = "حصص الألبان:" +
        // `<br>زبادي: ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` +
        `<br>زبادي: ${(results.dairy * 1 * 1 / numfood).toFixed(1)}  كوب  ` +

        // `<br>اللبن: ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` +
        `<br>حليب: ${(results.dairy * 1 * 1 / numfood).toFixed(1)}   كوب  `
        +
        // `<br> لبن رايب : ${(results.dairy * 240 * 1 / numfood).toFixed(1)}   جرام  ` +
        `<br>اللبن رايب: ${(results.dairy * 1 * 1 / numfood).toFixed(1)} كوب `

        +
        // `<br> لبن جاف: ${(results.dairy * 16 * 1 / numfood).toFixed(1)}   جرام  ` +
        `<br>لبن جاف : ${(results.dairy * 0.33 * 1 / numfood).toFixed(1)} كوب `

        const fruits = document.getElementById("fruits");
        fruits.innerHTML = "حصص الفاكهة:" +
            `<br>تمر: ${(results.fruits * 3 / numfood).toFixed(1)} حبة` +
            `<br>تفاح: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>مشمش متوسط: ${(results.fruits * 4 / numfood).toFixed(1)} حبة` +
            `<br>عنب صغير: ${(results.fruits * 15 / numfood).toFixed(1)} حبة` +
            `<br>موز متوسط: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>شمام: ${(results.fruits * 0.33 / numfood).toFixed(2)} حبة` +
            `<br>كرز: ${(results.fruits * 12 / numfood).toFixed(1)} حبة` +
            `<br>تين: ${(results.fruits * 2 / numfood).toFixed(1)} حبة` +
            `<br>جريب فروت: ${(results.fruits * 0.5 / numfood).toFixed(1)} حبة` +
            `<br>يوسفي: ${(results.fruits * 2 / numfood).toFixed(1)} حبة` +
            `<br>برتقال: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>جوافة: ${(results.fruits * 2 / numfood).toFixed(1)} حبة صغيرة` +
            `<br>بطيخ: ${(results.fruits * 1.25 / numfood).toFixed(2)} كوب` +
            `<br>كيوي: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>مانجو: ${(results.fruits * 0.5 / numfood).toFixed(1)} حبة` +
            `<br>خوخ متوسط: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>كمثرى متوسطة: ${(results.fruits * 1 / numfood).toFixed(1)} حبة` +
            `<br>أناناس: ${(results.fruits * 0.75 / numfood).toFixed(2)} كوب` +
            `<br>رمان: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>فراولة: ${(results.fruits * 1.25 / numfood).toFixed(2)} كوب` +
            `<br>مشمش معلب: ${(results.fruits * 4 / numfood).toFixed(1)} أنصاف` +
            `<br>كرز معلب: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>فواكه مشكلة معلبة: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>أناناس معلب: ${(results.fruits * 0.33 / numfood).toFixed(2)} كوب` +
            `<br>تفاح مجفف: ${(results.fruits * 4 / numfood).toFixed(1)} حلقات` +
            `<br>مشمش مجفف: ${(results.fruits * 6 / numfood).toFixed(1)} حلقات` +
            `<br>تين مجفف: ${(results.fruits * 1.5 / numfood).toFixed(1)} حبة` +
            `<br>زبيب: ${(results.fruits * 2 / numfood).toFixed(1)} ملعقة طعام` +
            `<br>عصير تفاح: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>عصير جريب فروت: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>عصير برتقال: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>عصير أناناس: ${(results.fruits * 0.5 / numfood).toFixed(2)} كوب` +
            `<br>عصير عنب: ${(results.fruits * 0.33 / numfood).toFixed(2)} كوب` +
            `<br>عصير توت بري: ${(results.fruits * 0.33 / numfood).toFixed(2)} كوب`;










        const vegetables = document.getElementById("vegetables");
        vegetables.innerHTML = `
            حصص الخضار: كوب نيء أو نصف كوب مطهي
            <br> خضار مشكل: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الفاصوليا: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> القرع: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الكرنب: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الملفوف: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الكوسا: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> البنجر: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الجزر: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> زهرة القرنبيط: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> البروكلي: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> باذنجان: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الكراث: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الفطر: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> البامية: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> البصل: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> بازلاء: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الفلفل: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> السبانخ: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الملوخية: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الطماطم: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> اللفت: ${(results.vegetables * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي
            <br> الخضراوات التالية غير محسوبة: 
            <br> بقدونس - خس - كرفس - خيار - بصل أخضر - فلفل - فجل
        `;
        













        const bread = document.getElementById("bread");
        bread.innerHTML = "حصص خبز:" +
            `<br>شوفان أو جريش أو سميد أو برغل: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب` +
            `<br>معكرونة: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب` +
            `<br>أرز أبيض أو أسمر: ${(results.bread * 0.33 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>كسكسي: ${(results.bread * 0.33 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>خبز: ${(results.bread * 0.33 * 1 / numfood).toFixed(1)} رغيف` +
            `<br>خبز: ${(results.bread * 30 * 1 / numfood).toFixed(1)} جرام` +

            `<br>صامولي أو برجر: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} قطعة` +
            `<br>توست: ${(results.bread * 1 * 1 / numfood).toFixed(1)} شريحة` +
            `<br>ذرة: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>فشار: ${(results.bread * 3 * 1 / numfood).toFixed(1)} كوب مطهي بالميكرويف` +
            `<br> كورن فليكس كامل : ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب` +
            `<br>بطاطس: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>بسكوت: ${(results.bread * 4 * 1 / numfood).toFixed(1)} حبة` +
            `<br>شابورة: ${(results.bread * 1.5 * 1 / numfood).toFixed(1)} حبة` +
            `<br>عدس: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>لوبيا: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>فول: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي` +
            `<br>فلافل: ${(results.bread *3* 1 / numfood).toFixed(1)} حبة متوسطة` +
            `<br>فاصوليا: ${(results.bread * 0.5 * 1 / numfood).toFixed(1)} كوب مطهي`;
        

            const meat = document.getElementById("meat");
            meat.innerHTML = "حصص لحوم:" +
                `<br> تونة أو سالمون: ${(results.meat * 6 / numfood).toFixed(1)} ملعقة ` +
                `<br> سردين بدون زيت: ${(results.meat * 3 / numfood).toFixed(1)} حبة متوسطة ` +
                `<br> جمبري أو سبيط: ${(results.meat * 5 / numfood).toFixed(1)} قطعة متوسطة ` +
                
                `<br> سمك دهني: ${(results.meat * 30 / numfood).toFixed(1)} جرام ` +
                `<br> سمك دهني: ${(results.meat * 1 / numfood).toFixed(1)} قطعة ` +
            
                `<br> لحم أحمر: ${(results.meat * 30 / numfood).toFixed(1)} جرام ` +
                `<br> لحم أحمر: ${(results.meat * 1 / numfood).toFixed(1)} قطعة منزوع العظم ` +
            
                `<br> لحم أبيض دواجن ${(results.meat * 30 / numfood).toFixed(1)} جرام ` +
                `<br> لحم أبيض دواجن: ${(results.meat * 1 / numfood).toFixed(1)} قطعة منزوع العظم ` +
            
                `<br> كبدة بأنواعها: ${(results.meat * 25 / numfood).toFixed(1)} جرام ` +
                `<br> كبدة بأنواعها: ${(results.meat * 1 / numfood).toFixed(1)} قطعة ` +
            
                `<br> جبن قليل الدسم: ${(results.meat * 30 / numfood).toFixed(1)} جرام ` +
                `<br> جبن قليل الدسم: ${(results.meat * 1 / numfood).toFixed(1)} قطعة ` +
            
                `<br> بارميزان: ${(results.meat * 2 / numfood).toFixed(1)} ملعقة طعام ` +
            
                `<br> جبن قريش: ${(results.meat * 0.25 / numfood).toFixed(1)} كوب ` +
            
                `<br> جبن حلوم قليل الدسم: ${(results.meat * 0.25 / numfood).toFixed(1)} قطعة ` +
            
                `<br> لبنة قليل الدسم: ${(results.meat * 40 / numfood).toFixed(1)} جرام ` +
                `<br> لبنة قليل الدسم: ${(results.meat * 3 / numfood).toFixed(1)} ملعقة طعام ` +
            
                `<br> بيض: ${(results.meat * 1 / numfood).toFixed(1)} حبة ` +
            
                `<br> بياض بيضتين: ${(results.meat * 1 / numfood).toFixed(1)} واحد `;
            

                const fats = document.getElementById("fats");
                fats.innerHTML = "حصص الدهون:" +
                    `<br> زيت زيتون: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> زيت عباد شمس: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> زبدة أو سمنة: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> سمسم: ${(results.fats * 10 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 2 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> طحينة السمسم: ${(results.fats * 10 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 2 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> زيتون: ${(results.fats * 35 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 8 / numfood).toFixed(1)} حبة` +
                
                    `<br><br> مكسرات (لوز أو كاجو): ${(results.fats * 8 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 6 / numfood).toFixed(1)} حبة` +
                
                    `<br><br> فول سوداني: ${(results.fats * 7 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 10 / numfood).toFixed(1)} حبة` +
                
                    `<br><br> زبدة الفول السوداني: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> مايونيز لايت: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> قشطة: ${(results.fats * 5 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 1 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> تتبيلة السلطة: ${(results.fats * 10 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 2 / numfood).toFixed(1)} ملعقة صغيرة` +
                
                    `<br><br> زيت جوز هند: ${(results.fats * 10 / numfood).toFixed(1)} جرام` +
                    `<br> ${(results.fats * 2 / numfood).toFixed(1)} ملعقة صغيرة`;
                




});
