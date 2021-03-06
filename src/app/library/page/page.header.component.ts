import { Component, OnInit, Input } from '@angular/core';
import { PaginationDescriptor } from '../pagination/pagination.descriptor';
import { AngularComplexAction } from '../types';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsPageHeader',
    templateUrl: './page.header.component.html',
    host: {
        '[class.Polaris-Page__Header]': 'true',
        '[class.Polaris-Page__Header--hasBreadcrumbs]': 'breadcrumbs !== undefined',
        '[class.Polaris-Page__Header--hasPagination]': 'pagination !== undefined',
    },
    styles: [':host {display: block;}'],
})
export class PageHeaderComponent implements OnInit {


    @Input() public title: string = '';
    @Input() public icon: string = '';
    @Input() public breadcrumbs: AngularComplexAction[];
    @Input() public secondaryActions: AngularComplexAction[];
    @Input() public primaryAction: AngularComplexAction;
    @Input() public pagination: PaginationDescriptor;

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {

    }
}
