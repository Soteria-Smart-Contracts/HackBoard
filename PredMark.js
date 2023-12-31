let ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"},{"internalType":"address[]","name":"NewMembers","type":"address[]"}],"name":"AddTeamMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GetAllTeams","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"}],"name":"GetTeamInfo","outputs":[{"components":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"TeamMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"internalType":"struct HackBoardRegistry.HackBoardTeam","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_User","type":"address"}],"name":"GetUserInfo","outputs":[{"components":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"internalType":"struct HackBoardRegistry.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HackBoardAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"CurrentMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"name":"OnboardNewTeam","outputs":[{"internalType":"uint256","name":"TeamCode","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TeamIncrement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Teams","outputs":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"stateMutability":"view","type":"function"}]
let PredABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CloseMarkets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"},{"internalType":"bool","name":"ForAgainst","type":"bool"}],"name":"DepositToTeam","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"SuccessfulTeams","type":"uint256[]"}],"name":"FinalizeMarkets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GetAllTeams","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"}],"name":"GetTeamInfo","outputs":[{"components":[{"internalType":"uint256","name":"TotalForPredictionsDeposits","type":"uint256"},{"internalType":"uint256","name":"TotalFadePredictionDeposits","type":"uint256"},{"internalType":"uint256","name":"WinnerPayoutRate","type":"uint256"},{"internalType":"bool","name":"ForSuccess","type":"bool"},{"internalType":"bool","name":"AgainstSuccess","type":"bool"}],"internalType":"struct HackBoardPredictionMarket.TeamStruct","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HackBoardAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HackBoardRegistryContract","outputs":[{"internalType":"contract HackBoardRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarketsOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OpenMarkets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ParticipatingTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TeamParticipating","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TeamPredictionsInfo","outputs":[{"internalType":"uint256","name":"TotalForPredictionsDeposits","type":"uint256"},{"internalType":"uint256","name":"TotalFadePredictionDeposits","type":"uint256"},{"internalType":"uint256","name":"WinnerPayoutRate","type":"uint256"},{"internalType":"bool","name":"ForSuccess","type":"bool"},{"internalType":"bool","name":"AgainstSuccess","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TotalFadePrizePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TotalForPrizePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"UserFadeDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"UserForDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"},{"internalType":"bool","name":"ForAgainst","type":"bool"}],"name":"WithdrawFromTeam","outputs":[],"stateMutability":"nonpayable","type":"function"}]

Login();
let RegistryContract;


let RegistryContractAddress = "0xD87dF59Bf476e9700f36F00c198166bC901a0e17";
let PredictionsContractAddress = "0x00BaA09F96928A168cd76c949ee9668C50EA2F44";
let provider;
let signer;

async function Login() {
    console.log("button clicked");
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask is installed");
        try {
            // Get the network ID
            const networkId = await window.ethereum.request({ method: 'net_version' });

            if (networkId === '100') {
                provider = new ethers.BrowserProvider(window.ethereum);
                console.log("Connected to Gnosis Chain");
                signer = await provider.getSigner();
                RegistryContract = new ethers.Contract(RegistryContractAddress, ABI, signer);
                PredictionsContract = new ethers.Contract(PredictionsContractAddress, PredABI, signer);

                document.getElementById('metamaskButton').innerText = "Connected";
                document.getElementById('metamaskButton').disabled = true;
                document.getElementById('temprow').style.display = "none";

                SetUserTeamName();

                populateTableWithTeamInfo();
            } else {
                alert("Please switch to Gnosis Chain (Network ID 100) in MetaMask.");
            }
        } catch (error) {
            console.error("User denied account access or an error occurred.");
        }
    } else {
        alert("MetaMask is not installed");
    }
}

//Create a function that calls the RegistryContract and gets the list of all team ids
async function GetAllTeams() {
    let teamIDs = await PredictionsContract.GetAllTeams();
    return teamIDs
}

//Create a function that calls the RegistryContract and gets the team info for each team then displays it in the "Table" element as a tbody row
async function GetTeamInfo(teamID) {

    let teamInfo = await RegistryContract.GetTeamInfo(teamID);

    return JSON.parse(JSON.stringify(teamInfo))
}

async function GetUserInfo(){
    let User = await RegistryContract.GetUserInfo(await signer.getAddress());
    let Output = [User[0], JSON.parse((User[1]).toString())]
    return Output;
}

async function SetUserTeamName(){
    let UserInfo = await GetUserInfo();
    if (UserInfo[0]){
        TeamInfo = await GetTeamInfo(UserInfo[1]);
        document.getElementById("UserTeamName").innerText = ' ' + TeamInfo[1] + ' Team';
    }
    else{
        return
    }
}

async function GetTeamPredictionsInfo(teamID){
    let TeamInfo = await PredictionsContract.GetTeamInfo(teamID);
    TeamInfo = [parseInt(TeamInfo[0]), parseInt(TeamInfo[1]), parseInt(TeamInfo[2]), TeamInfo[3], TeamInfo[4]];
    return TeamInfo
}

async function GetAllTeamInfoToConsole(){
    let TeamInfos = [];
    let teamIDs = await GetAllTeams();
    for (let i = 0; i < teamIDs.length; i++) {
        TeamInfos.push(await GetTeamInfo(teamIDs[i]));
    }
    console.log(TeamInfos)
    return(TeamInfos)
}

async function GetAllTeamPredictionsInfoToConsole(){
    let TeamInfos = [];
    let teamIDs = await GetAllTeams();
    for (let i = 0; i < teamIDs.length; i++) {
        TeamInfos.push(await GetTeamPredictionsInfo(teamIDs[i]));
    }
    console.log(TeamInfos)
    return(TeamInfos)
}

async function insertDataIntoTable(dataone, datatwo, TeamID) {
    // Add console logs to debug the dataone
    console.log("Inserting Data")

    const teamName = dataone[1];
    const LongInterest = datatwo[0] / 1000000000000000000;
    const ShortInterest = datatwo[1] / 1000000000000000000;
    const TotalIntest = LongInterest + ShortInterest;
    const UserForDeposit = parseInt(await PredictionsContract.UserForDeposits(signer.address, TeamID)) / 1000000000000000000;
    const UserFadeDeposit = parseInt(await PredictionsContract.UserFadeDeposits(signer.address, TeamID)) / 1000000000000000000;


    const tbody = document.getElementById('Registry');

    const tr = document.createElement('tbody');
    tr.innerHTML = `<tr>
        <td>${teamName}</td>
        <td>Long interest: ${LongInterest} $XDAI <br> Short Interest: ${ShortInterest} $XDAI <br> Total Interest: ${TotalIntest} $XDAI</td>
        <td>Your Long Interest: ${UserForDeposit} $XDAI<br> <input style="margin:5px" type="number" id="LongInput${TeamID}" placeholder="Enter Amount"></input><br><button style="font-size: medium" onclick="IncreaseInterest(true, ${TeamID})">Increase Long Interest</button></td>
        <td>Your Short Interest: ${UserFadeDeposit} $XDAI<br> <input style="margin:5px" type="number" id="ShortInput${TeamID}" placeholder="Enter Amount"></input><br><button style="font-size: medium" onclick="IncreaseInterest(false, ${TeamID})">Increase Short Interest</button></td>
        </tr>
    `;

    tbody.appendChild(tr);
}

async function IncreaseInterest(LongShort, TeamID){
    let Amount;
    if (LongShort){
        Amount = document.getElementById(`LongInput${TeamID}`).value;
    }
    else{
        Amount = document.getElementById(`ShortInput${TeamID}`).value;
    }
    if (Amount == ""){
        alert("Please enter an amount");
        return
    }
    Amount = BigInt(Amount * 1000000000000000000);
    if (LongShort){
        await PredictionsContract.DepositToTeam(TeamID, LongShort, {value: Amount});
    }
    else{
        await PredictionsContract.DepositToTeam(TeamID, LongShort, {value: Amount});
    }
}

//create a function that returns the team id for all teams that have any forinterest
async function GetTeamsWithForInterest() {
    let TeamIDs = await GetAllTeams();
    let TeamsWithForInterest = [];
    for (let i = 0; i < TeamIDs.length; i++) {
        let TeamInfo = await GetTeamPredictionsInfo(TeamIDs[i]);
        if (TeamInfo[0] > 0) {
            //convert the team id from bignum to just number and paste the array as a string
            ID = parseInt(TeamIDs[i])
            TeamsWithForInterest.push(ID);
        }
    }
    console.log(TeamsWithForInterest)
    return TeamsWithForInterest.toString();
}



async function addGnosisChainToMetaMask() {
    const chainId = 100;
    const rpcUrl = 'https://rpc.ankr.com/gnosis';
    const currencySymbol = 'XDAI';
    const explorerUrl = 'https://gnosisscan.io/';
  
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Gnosis Chain',
            nativeCurrency: {
              name: currencySymbol,
              symbol: currencySymbol,
              decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: [explorerUrl],
          },
        ],
      });
  
      console.log('Gnosis Chain added to MetaMask!');
    } catch (error) {
      console.error('Error adding Gnosis Chain to MetaMask:', error);
    }
  }

async function populateTableWithTeamInfo() {
    
        const teamData = await GetAllTeamInfoToConsole();
        const predData = await GetAllTeamPredictionsInfoToConsole();
        
        const indices = Array.from(predData.keys());

        indices.sort((a, b) => (predData[a][0] + predData[a][1]) - (predData[b][0] + predData[b][1]));

        indices.reverse();

        console.log(indices);

        console.log(teamData);
        for (let i = 0; i < teamData.length; i++){
            if(indices[i] != 9 && indices[i] != 26 && indices[i] != 31 && i != 35){
            console.log(teamData[indices[i]], predData[indices[i]], indices[i])
            await insertDataIntoTable(teamData[indices[i]], predData[indices[i]], indices[i]);
            }
        }
        
    
}

document.addEventListener("DOMContentLoaded", function() {
    // Define the start time and duration (in this case, a 48-hour hackathon)
    const startTime = new Date('2023-10-22T21:00:00');  // Adjust the date and time as needed
    const durationInMilliseconds = 32400 * 100;
    const endTime = new Date(startTime.getTime() + durationInMilliseconds);

    function updateCountdown() {
        const now = new Date();
        let timeDifference = endTime - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        timeDifference -= hours * (1000 * 60 * 60);

        const mins = Math.floor(timeDifference / (1000 * 60));
        timeDifference -= mins * (1000 * 60);

        const secs = Math.floor(timeDifference / 1000);

        // Update the countdown timer display
        document.getElementById('timer').textContent = `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
