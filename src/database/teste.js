const Database = require ('./db');
const createProffy = require ('./createProffy');

Database.then(async (db) => {
    //Set data
    proffyValue = {
        name: "Ana Luiza Meloni",
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFAHI4iAGXZdA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=LMGFqaiTiZQmOlT6Wgn2TNy4wVS1KW2DAtxy9an1O-g",
        whatsapp: "31 984140164", 
        bio: "Entusiasta das melhores ferramentas para análise de BI.<br><br>Apaixonado por transformar dados em informação e por mudar a vida das emresas através da implantação de modelos de gestão integrada. Mais de 10 anos de experiência em pequenas, médias e grandes empresas. Vamos mudar a forma como os seus gestores olham para o mercado e, consequentemente, seus clientes vão mudar a forma como olham para sua empresa.",
        
    }

    classValue = {
        subject: 1,
        cost:"120",
        //proffy_id comes from database
    }

    classScheduleValues = [
        //class_id comes from database
        {
            weekday:1,
            time_from:720,
            time_to:1220
        },
        {
            weekday:2,
            time_from:120,
            time_to:220
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues});
    
    //Get data
    //Getting all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");

    //Getting the classes of a given proffy and your data
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

    //Verify if the student schedule fit with the proffy schedule
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "800"
        AND class_schedule.time_to > "800";
    `);
})