import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {

	setLocalUser(value : string){
		localStorage.setItem("user",value);
	}

	getLocalUser(){
		return localStorage.getItem("user");
	}

	setNullLocalUser(){
		localStorage.setItem("user",null);
	}
    
}