# include .env file and export its env vars
# (-include to ignore error if it does not exist)
-include .env

start : create_chain start_local

create_chain :; sui genesis -f
start_local :; sui start