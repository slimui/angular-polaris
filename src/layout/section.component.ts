import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsSection',
    templateUrl: 'section.component.html',
    host: {
        '[class.Polaris-Layout__Section]': 'true',
        '[class.Polaris-Layout__Section--secondary]': 'secondary'
    }
})
export class SectionComponent implements OnInit {

    /**
     * Whatever this section is secondary
     */
    @Input() secondary: boolean = false;

    ngOnInit() {}

}
