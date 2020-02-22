//Author: Kishore Jothinaryanan
//COMP397_Midterm


module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        rollButton: objects.Button;
        dice1:createjs.Bitmap;
        dice2:createjs.Bitmap;
        no1:objects.Label;
        no2:objects.Label;
        result1:number;
        result2:number;
    
 

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            this.rollButton=new objects.Button();
            
            this.Start();

            
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {


        }

        
    }
}