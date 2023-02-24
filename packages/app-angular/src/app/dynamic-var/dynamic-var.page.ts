import { Component, OnInit } from '@angular/core';
import { ContentsquareService } from '../services/contentsquare.service';

declare type DynamicVarItemApp = {
  title: any;
  dynVarKey: any;
  dynVarValue: any;
};


@Component({
  selector: 'app-dynamic-var',
  templateUrl: './dynamic-var.page.html',
  styleUrls: ['./dynamic-var.page.scss'],
})
export class DynamicVarPage implements OnInit {
  public dynamicVarItems: DynamicVarItemApp[] = [
    {
      title: 'NormalStringValue',
      dynVarKey: 'NormalStringValue',
      dynVarValue: 'value',
    },
    {
      title: 'EmptyStringValue',
      dynVarKey: 'EmptyStringValue',
      dynVarValue: '',
    },
    {
      title: 'NullValue',
      dynVarKey: 'NullValue',
      dynVarValue: null,
    },
    {
      title: 'StringIntValue',
      dynVarKey: 'StringIntValue',
      dynVarValue: '10',
    },
    {
      title: 'NormalIntValue',
      dynVarKey: 'NormalIntValue',
      dynVarValue: 10,
    },
    {
      title: 'FloatValue',
      dynVarKey: 'FloatValue',
      dynVarValue: 10.5,
    },
    {
      title: 'IntValueZero',
      dynVarKey: 'IntValueZero',
      dynVarValue: 0,
    },
    {
      title: 'IntValueNegative',
      dynVarKey: 'IntValueNegative',
      dynVarValue: -10,
    },
    {
      title: 'KeyTooLongWithStringValue',
      dynVarKey:
        'MyKeyIsReallyTooLongAsItIsOver50CharactersAndShouldTriggerAnError',
      dynVarValue: 'string',
    },
    {
      title: 'KeyTooLongWithIntValue',
      dynVarKey:
        'MyKeyIsReallyTooLongAsItIsOver50CharactersAndShouldTriggerAnError',
      dynVarValue: 10,
    },
    {
      title: 'WrongStringValue',
      dynVarKey: 'WrongStringValue',
      dynVarValue:
        'I am really tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
    },
  ];

  public dynamicVarItemsTyped: DynamicVarItemApp[] = [
    {
      title: 'NormalStringValue',
      dynVarKey: 'NormalStringValue',
      dynVarValue: 'value',
    },
    {
      title: 'EmptyStringValue',
      dynVarKey: 'EmptyStringValue',
      dynVarValue: '',
    },
    {
      title: 'NullValue',
      dynVarKey: 'NullValue',
      dynVarValue: null,
    },
    {
      title: 'StringIntValue',
      dynVarKey: 'StringIntValue',
      dynVarValue: '10',
    },
    {
      title: 'NormalIntValue',
      dynVarKey: 'NormalIntValue',
      dynVarValue: 10,
    },
    {
      title: 'FloatValue',
      dynVarKey: 'FloatValue',
      dynVarValue: 10.5,
    },
    {
      title: 'IntValueZero',
      dynVarKey: 'IntValueZero',
      dynVarValue: 0,
    },
    {
      title: 'IntValueNegative',
      dynVarKey: 'IntValueNegative',
      dynVarValue: -10,
    },
    {
      title: 'KeyTooLongWithStringValue',
      dynVarKey:
        'MyKeyIsReallyTooLongAsItIsOver50CharactersAndShouldTriggerAnError',
      dynVarValue: 'string',
    },
    {
      title: 'KeyTooLongWithIntValue',
      dynVarKey:
        'MyKeyIsReallyTooLongAsItIsOver50CharactersAndShouldTriggerAnError',
      dynVarValue: 10,
    },
    {
      title: 'WrongStringValue',
      dynVarKey: 'WrongStringValue',
      dynVarValue:
        'I am really tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
    },
  ];


  constructor(private contentsquareService: ContentsquareService) { }

  ngOnInit() {
  }

  sendDynVar(item: DynamicVarItemApp) {

    this.contentsquareService.sendCommand('sendDynamicVar', { key: item.dynVarKey, value: item.dynVarValue})
    .then((res) => {
      console.log('sendDynamicVar result', res);
    });
  }

  sendDynVarTyped(item: DynamicVarItemApp) {
    this.contentsquareService.sendCommand('sendDynamicVar', { key: item.dynVarKey, value: item.dynVarValue})
    .then((res) => {
      console.log('sendDynamicVar typed result', res);
    });
  }
}
