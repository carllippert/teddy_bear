# include .env file and export its env vars
# (-include to ignore error if it does not exist)
-include .env

#deploy dev
all : deploy_dev update_export remove_new_line remove_bak move

#foundry 1 private key
deploy_dev :; forge create NFT --rpc-url=http://localhost:8545 --private-key=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --constructor-args Loop LOOP | grep "Deployed to:" > contract_address.js 
# all: clean remove install update solc build 

update_export :; sed -i.bak 's/Deployed to: /export const contract_address = "/' contract_address.js
remove_new_line :; tr '\n' '"\n' < contract_address.js > not_contract_address.js
remove_bak :; rm contract_address.js.bak
move :; mv not_contract_address.js contract_address.js