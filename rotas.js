import Express from 'Express';

const app = Express();

app.get('/', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
);

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);


//

<html>
    <head><title>Libertix</title></head>
    <body>
        <script>
            fetch('https://libertix.com.br')
            method: 'post'
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                userId: ,
                id: ,
                title:"",
                completed: 

            })
        </script>
    </body>
</html>