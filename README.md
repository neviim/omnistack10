## Semana Omnistec 2020 13-17

    # Instalar e configurar ambiente desenvolvimento.

        Node.js v12.x:

        # Using Ubuntu
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        sudo apt-get install -y nodejs

        # Using Debian, as root
        curl -sL https://deb.nodesource.com/setup_12.x | bash -
        apt-get install -y nodejs

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



