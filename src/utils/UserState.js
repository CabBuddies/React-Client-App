class UserState{

    AUTH_TOKEN = 'authToken';

    hasUser(){
        return localStorage.hasOwnProperty(this.AUTH_TOKEN);
    }

    getUser(){
        let jwt = localStorage.getItem(this.AUTH_TOKEN);
        console.log(jwt);
        return jwt !== null ? jwt : '';
    }

    setUser(authToken){
        console.log(this.AUTH_TOKEN+' => '+authToken);
        localStorage.setItem(this.AUTH_TOKEN,authToken);
        console.log(this.getUser());
        this.onUpdate();
    }

    unsetUser(){
        localStorage.removeItem(this.AUTH_TOKEN);
        console.log(this.getUser());
        this.onUpdate();
    }

    cmps = [];

    listenUpdates(cmp){
        this.cmps.push(cmp);
    }

    onUpdate(){
        let b = this.hasUser();
        for (let index = 0; index < this.cmps.length; index++) {
            this.cmps[index].setState({'hasUser':b});
        }
    }

}

let userState = new UserState();

export default userState;