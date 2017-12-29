# ISHA DashBoard

### Prerequisite  

NodeJS (v5.6.0+) with NPM 3.6.0+  

************************************************************************************************************* 
### Installing Node on Mac  
[Reference link](http://blog.teamtreehouse.com/install-node-js-npm-mac)  

Open Terminal and follow below instructions/commands  
Install brew  
$$ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  

Install NodeJS  
$$brew install node  
To see if Node is installed, type node -v in Terminal.  
To see if NPM is installed, type npm -v in Terminal.  

Upgrade to latest version of Node and NPM  
$$brew update  
$$brew upgrade node  
************************************************************************************************************* 
#### Project Structure  
Create following project structure  

isha_Dashboard  
|----- ui  
|----- services  

************************************************************************************************************* 
### Instructions / Usage :  

Clone the code from the repository using Below Instruction  

$$ git clone https://github.com/maazmmd/Isha-Dashboard isha_dashboard  

Go Inside isha_Dashboard  UI Directory  
$$ cd isha_dashboard/ui  

$$ bower Install  

Install Globally Http-server using npm  
$$ npm install -g http-server  

$$ http-server -c1  
Run the Http-server which will run on Default Port 8080, URL : http://127.0.0.1:8080/#!/  
