## Semana Omnistec 2020 13-17

    # Instalar e configurar ambiente desenvolvimento.

        Node.js v12.x:

        # Using Ubuntu 19.10
        $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        $ sudo apt-get install -y nodejs

        # Using Debian, as root
        $ curl -sL https://deb.nodesource.com/setup_12.x | bash -
        $ apt-get install -y nodejs

        $ node -v
        v12.14.1

        ## gerenciador de pacotes:
            # npm 
            $ npm -v
            6.13.6

            # yarn * (Este é o mais indicado de se utilizado)
            # yarn (Ubuntu install) https://yarnpkg.com/en/docs/install#debian-stable
            $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 
            # Instalar sem o node
            $ sudo apt update && sudo apt install --no-install-recommends yarn
            $ yarn -v
            1.21.1

        ## git
            $ git config --global --list
            $ git config --global --edit

            $ git config --global user.email "neviimdev@gmail.com"
            $ git config --global user.name "Neviim"

            # Usando git
                $ git add *
                $ git status
                $ git commit -m "Inicio codigo"
                $ git push

        ## Goggle Chrome extensões
            JSON Viewer

        ## Ferramentas utilisadas
            - Insomnia.rest
                # Add to sources
                $ echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" \
                    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

                # Add public key used to verify code signature
                $ wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc \
                    | sudo apt-key add -

                # Refresh repository sources and install Insomnia
                $ sudo apt-get update
                $ sudo apt-get install insomnia

        ## Banco de dados
            - MongoDB Atlas (em nuvel e free)
              https://www.mongodb.com/cloud/atlas
              User: j...
              Pass: a...0
              Billing Cupon: ROCKETSEAT2020

              Banco: n...m
              Pass.: a...0 
              # Connection String Only - temporaria dev curso
              mongodb+srv://neviim:<password>@cluster0-sdrve.gcp.mongodb.net/test?retryWrites=true&w=majority



        ## Bibliotecas
                $ yarn add express
                $ yarn add mongoose
                $ yarn add nodemon -D    # -D dependencia de desenvolvimento.
                


# Backend

    $ mkdir backend
    $ cd backend
    $ yarn init -y

    # apos instalar o "nodemon" pode utilizar desta forma
    $ yarn nodemon index.js

        # Automatizando este comando em "packege.json"
        "scripts": {
            "dev": "nodemon index.js"
        },


    

