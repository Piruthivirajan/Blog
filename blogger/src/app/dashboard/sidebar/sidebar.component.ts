import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.html',
    styleUrls: ['./sidebar.css']
})
export class SideBarComponent implements OnInit {
    mode: string = 'side';
    opened: boolean = false;

    constructor(private media: ObservableMedia) {
        this.media.subscribe((mediaChange: MediaChange) => {
            this.mode = this.getMode(mediaChange);
            // this.opened = this.getOpened(mediaChange);
        });
    }

    private getMode(mediaChange: MediaChange): string {
        // set mode based on a breakpoint
        if (this.media.isActive('gt-sm')) {
            return 'side';
        } else {
            return 'over';
        }
    }

    // open/close as needed
    //private getOpened(mediaChange: MediaChange): string { }

    ngOnInit() {

    }
}

