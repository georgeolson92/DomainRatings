import { Component, OnInit, HostListener } from '@angular/core';
import SampleJson from '../domains.json';


@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  domains: any = (SampleJson as any);

  constructor() { }

  ngOnInit() {
    this.getDomains();
    this.reorderDomains();
  }

  getDomains() {
    console.log('Reading local json files');
    console.log(SampleJson);
    console.log(this.domains);
  }

  upVote(thisDomain) {
    thisDomain.Rating = thisDomain.Rating + 1;
    console.log("upvoted " + thisDomain.URL);
    this.reorderDomains();
  }

  downVote(thisDomain) {
    thisDomain.Rating = thisDomain.Rating - 1;
    console.log("downvoted " + thisDomain.URL);
    this.reorderDomains();
  }

  reorderDomains() {
    this.domains = this.domains.sort((a,b) => b.Rating - a.Rating);
  }

}
