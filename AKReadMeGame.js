const GameState = Object.freeze({
    HOLA:   Symbol("hola"),
    START:  Symbol("start"),
    HAULT: Symbol("hault"),
    POINT: Symbol("point"),
    ROUTE: Symbol("route"),
    WANT: Symbol("want"),
    LEVEL: Symbol("level"),
    CHECK: Symbol("check"),
    DANGER: Symbol("danger"),
    BLINK: Symbol("blink"),
    ENEMY: Symbol("enemy"),
    EFFORT: Symbol("effort"),
    HIDE: Symbol("hide"),
    RISK: Symbol("risk"),
    GUIDE: Symbol("guide"),
    ACTIVATE: Symbol("activate"),
    UNLOCK: Symbol("unlock")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.HOLA;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.HOLA:
                sReply = "Hi..!!! This is my first game by Amrit. Here we will be playing *****Scampaul Horizon****. Ready to play....!!!";
                this.stateCur = GameState.START;
                break;
            case GameState.START:
                if(sInput.toLowerCase().match("engage")){
                    sReply = "Lets get started. Pick a car or a bike of your choice. As you start you will see that- You are approaching a restuaraunt, Do you want to eat something or have a nap?";
                    this.stateCur = GameState.POINT
                }else{
                    sReply ="Warning, Resume your game otherwise you will lose. ";
                    this.stateCur = GameState.HAULT;
                }
                break;
            case GameState.POINT:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Do you want to earn some more points?If yes, Go to the car wash and earn 2000 points.";
                    this.stateCur = GameState.ROUTE;
                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;

                }
                break;
            case GameState.ROUTE:
                if(sInput.toLowerCase().match("follow")){
                    sReply = "In order to win this level the best route to cover the distance is the highway else follow your own routes. You may loose this level if you avoid the highway.";
                    this.stateCur = GameState.WANT;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.WANT:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Do you want to pick up your friend along with you or complete the mission on your own? ";
                    this.stateCur = GameState.LEVEL;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.LEVEL:
                if(sInput.toLowerCase().match("settings")){
                    sReply = "Congratulations and welcome to the second level.Do you want to continue with the same car? Go click on the settings before starting the level. ";
                    this.stateCur = GameState.CHECK;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.CHECK:
                if(sInput.toLowerCase().match("Ignore")){
                    sReply = "Want to check how much amount you have in order to modify your car? ";
                    this.stateCur = GameState.DANGER;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.DANGER:
                if(sInput.toLowerCase().match("uturn")){
                    sReply = "Warning! you have entered a danger zone. Move back and make a U - turn before the cops arrive. ";
                    this.stateCur = GameState.BLINK;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.BLINK:
                if(sInput.toLowerCase().match("flow")){
                    sReply = " Orangle light blinking, a sign of low fuel. Go to the nearby gas station in order to keep flowing. ";
                    this.stateCur = GameState.ENEMY;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose. ";
                    this.stateCur = GameState.HAULT;
                }
                break;
                case GameState.ENEMY:
                if(sInput.toLowerCase().match("ready")){
                    sReply = "Get ready with your gun and the knife, You are approaching your enemies soon. ";
                    this.stateCur = GameState.EFFORT;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose. ";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.EFFORT:
                if(sInput.toLowerCase().match("ok")){
                    sReply = "In order to proceed to the next level make the best possible efforts to kill your opponent. ";
                    this.stateCur = GameState.HIDE;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.HIDE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Tired? Go hide in the house in front of you. Be careful of your surroundings. ";
                    this.stateCur = GameState.RISK;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.RISK:
                if(sInput.toLowerCase().match("sure")){
                    sReply = "Make sure you load your gun. ";
                    this.stateCur = GameState.GUIDE;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.GUIDE:
                if(sInput.toLowerCase().match("new")){
                    sReply = "Use the map for more guidance. Want to change clothes? Type new clothes. ";
                    this.stateCur = GameState.ACTIVATE;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.ACTIVATE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Want to activate cheat? 10,000 points required. ";
                    this.stateCur = GameState.UNLOCK;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose. ";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                case GameState.UNLOCK:
                if(sInput.toLowerCase().match("earn")){
                    sReply = "In order to continue playing unlock the levels by earning 8000 points ";
                    this.stateCur = GameState.START;

                }else{
                    sReply = "Warning, Resume your game otherwise you will lose.";
                    this.stateCur = GameState.HAULT;
    
                }
                break;
                
        }
        return([sReply]);
    }
}
