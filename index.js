const express = require('express');
const mysql=require('mysql');
const app = express();
const PORT =8181;


const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "brand_db",
});

db.connect(function(error){
    if(error) throw error;
    console.log('connected');
});

app.get('/commands',function(req,res){
    db.query("SELECT * FROM commands",function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

app.post('/commands',function(req,res){
    const {body}=req;
    db.query(`INSERT INTO commands(nom,prenom,tel,habit_id) VALUES(body.nom,body.prenom,body.tel,body.habit_id)`);
    return res.status(201).json('user crée');
});



app.put('/commands/:id',function(req,res){
    const {id}=req.params;
    const {body}=req.body;
    db.query(`UPDATE commands SET nom=body.nom,prenom=body.prenom,tel=body.tel,habit_id=body.habit_id WHERE id=${id}`,function(error,data){
          if(error){return error;}
          return res.status(201).json({data});
    });

 });

app.get('/commands/:id',function(req,res){
    const {id}=req.params;
    db.query(`SELECT * FROM commands WHERE id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

 app.delete('/commands/:id',function(req,res){
    const {id}=req.params;
    db.query(`DELETE FROM commands where id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    }); 
 });





 //HABITS;
 app.get('/habits',function(req,res){
    db.query("SELECT * FROM habits",function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

app.post('/habits',function(req,res){
    const {body}=req;
    db.query(`INSERT INTO habits(tite,sous_titre,prix,genre,img,nbr_etoile) VALUES(body.titre,body.sous_titre,body.prix,body.genre,body.img,body.nbr_etoile)`);
    return res.status(201).json('commande créer');
});

app.put('/habits/:id',function(req,res){
    const {id}=req.params;
    const {body}=req.body;
    db.query(`UPDATE habits SET title=body.title,sous_titre=body.sous_titre,prix=body.prix,genre=body.genre,img=body.img,nbr_etoile=body.nbr_etoile WHERE id=${id}`,function(error,data){
          if(error){return error;}
          return res.status(201).json({data});
    });

 });

app.get('/habits/:id',function(req,res){
    const {id}=req.params;
    db.query(`SELECT * FROM habits WHERE id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

 app.delete('/habits/:id',function(req,res){
    const {id}=req.params;
    db.query(`DELETE FROM habits where id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    }); 
 });



 
 //USER
 app.get('/user',function(req,res){
    db.query("SELECT * FROM user",function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

app.post('/user',function(req,res){
    const {body}=req;
    db.query(`INSERT INTO user(nom,prenom,tel) VALUES(body.nom,body.prenom,body.tel)`);
    return res.status(201).json('user crée');
});

app.put('/user/:id',function(req,res){
    const {id}=req.params;
    const {body}=req.body;
    db.query(`UPDATE user SET nom=body.nom,prenom=body.premon,tel=body.tel WHERE id=${id}`,function(error,data){
          if(error){return error;}
          return res.status(201).json({data});
    });

 });

app.get('/user/:id',function(req,res){
    const {id}=req.params;
    db.query(`SELECT * FROM user WHERE id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    });
});

 app.delete('/user/:id',function(req,res){
    const {id}=req.params;
    db.query(`DELETE FROM habits where id=${id}`,function(error,data){
        if(error){return error};
        return res.status(201).json({data});
    }); 
 });



app.listen(PORT,()=>console.log(PORT));




















