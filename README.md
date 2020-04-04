# Background and Overview:
Minion Wars is a MERN stack project game that is centered around collecting, selling, battling digital tokens called minions. Minions are represented by an image. Each minion has an assigned trait value that is randomized upon creation. Users also have the option of mating their existing minions to create new child minions. The website includes interactions between users. A user has the option of attacking another user's territory, the receiving end will get a notification that another user has attacked them. Attacking users can leave comments to the defending user.  

[Live Link](https://minion-wars.herokuapp.com/#/)

#### Homepage
<img src="https://user-images.githubusercontent.com/50147749/77571578-fc4f4700-6ea3-11ea-978f-f04129a89174.png">

#### React Modal
![](/frontend/src/app/assets/login_demo.gif)
<p align="center">Quick and intuitive react modals are utilized throughout the app to enhance the user's experience.</p>

#### User Market Place
![](/frontend/src/app/assets/minionwarsmarket.gif)
<p align="center">Upon every market place visit, minions are randomized to enforce better playability.</p>

# Functionality and MVP:
* Buying minions
* Selling minions
* Fight other user's minions
* User profile page that shows all the minions
* Splash page
* User authorization: sign up and log in
* Production README

# Bonus Features:
* Mating minions to create new child minions
* Randomize minion's characteristics
* User can purchase a random token

# Technologies and Technical Challenges 
* Working on a single project with multiple collaborators (being able to resolve merge conflicts)
* Mongo
* Express
* React
* Node.js
* HTML5
* CSS3
* Axios
* Postman

# Code Snippet

### Battle Feature
Implement a battle feature that would result in a different outcome base on the attacking and defending  minion's stats. 

```
  attack(minion1, minion2){
    this.attacked = true;
    if (!minion1){
      this.result = this.currentUser.username + " go buy a minion!"
      return;
    }

    if (!minion2){
      this.result = this.currentUser.username + " wins by default"
      this.victoryNotice = "You have earned 100 coins for this victory!";
      this.currentUser.coins += 100;
      this.props.updateUser(this.currentUser);
      return;
    }

    let dmg;
    while (minion1.hp > 0 && minion2.hp > 0){
      dmg = minion1.attack - minion2.defense;
      minion2.hp -= dmg;
      this.result += `${minion1.name} deals ${dmg} to ${minion2.name}, hp left: ${minion2.hp}\n`;
      if (minion2.hp <= 0){
        this.result += this.currentUser.username + "'s " + minion1.name + " wins";
        this.victoryNotice = "You have earned 100 coins for this victory!";
        this.currentUser.coins += 100;
        this.props.updateUser(this.currentUser);
        break
      }

      dmg = minion2.attack - minion1.defense
      minion1.hp -= dmg;
      this.result += `${minion2.name} deals ${dmg} to ${minion1.name}, hp left: ${minion1.hp}\n`;
      if (minion1.hp <= 0) {
        this.result += this.enemy.username + "'s " + minion2.name + " wins";
        break
      }
    }
  }
```
### User Validation

Built user authentication by encrypting user details with JSON Webtoken to be used with Axios to be decrypted with the JWT-Decode library in the frontend.

```
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, username: user.username };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});
```

Included Validator.js library to check model validation for the inclusion of password & email upon login.
```
function validateLoginInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.password = validText(data.password) ? data.password : "";


  if (Validator.isEmpty(data.username)) {
    errors.username = "username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
```

## Group Members and Work Breakdown:
* Greg: 
* Lawrence:
* John:
* Anton:

### Day one: Splash page and user backend/frontend
* John: Backend 
* Lawrence: Backend
* Anton: Frontend 
* Greg: Supervising group/research/planning material for next day 

### Day two: Display (handles window resizing, canvas) AND Game logic
* Greg: Backend - User & minion schema, validations, routes
* John: Backend - User & minion schema, validations, routes
* Lawrence: Frontend splash page
* Anton: User profile page

### Day three: 
* Greg: Backend - User, minion association, seeding 
* John: Backend - User, minion association, seeding
* Lawrence: Frontend - profile page, and minion index, as well as a footer for all the pages
* Anton: Frontend - profile page, and minion index, as well as a footer for all the pages

### Day four: 
* Greg: Backend - Buy/sell feature
* John: Backend - Buy/sell feature
* Lawrence: Frontend - Update navbar, slash page 
* Anton: Frontend - Attack page, profile page

### Day five: Test and Update README
* Greg: Backend - Attack feature and refactor miscellaneous
* John: Backend - Attack feature and refactor miscellaneous 
* Lawrence: Frontend - Update miscellaneous CSS
* Anton: Frontend - Update miscellaneous CSS 
