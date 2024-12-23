import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit{
  ngOnInit(): void {
  }

  status : boolean = false;
  count : number = 0;
  nxtstatus : boolean = true;
  backBtn(){
    const Container = document.getElementById('slide-container');
    if(Container){
      Container.style.scrollBehavior='smooth';
      Container.scrollLeft -= 1300;
      this.count = this.count - 1;
      if(this.count < 1){
        this.status = false;  
      }
      this.nxtstatus = true;
    }
  }
  nextBtn(){
    const Container  = document.getElementById('slide-container');
    if(Container){
      Container.style.scrollBehavior='smooth';
      Container.scrollLeft += 1300;
      this.count = this.count + 1;
      this.count !> 3;
      if(this.count > 0){
        this.status = true;
      }
      else{
        this.status = false;
      }
      if(this.count >= 2){
        this.nxtstatus = false;  
      }
      
    }
  }

  showHiddenDiv(){
    const element_id = document.getElementById('hidden-container');
    
    if(element_id){
      element_id.classList.remove('hidden');
    }
    console.log('hide');
    
  }
  hiddenDiv(){
    const element_id = document.getElementById('hidden-container');
    if(element_id){
      element_id.classList.add('hidden');
    }
    console.log('out');
    
  }
}
