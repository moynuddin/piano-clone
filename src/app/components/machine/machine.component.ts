import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handlerOne() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68437__pinkyfinger__piano-a.wav',
      ],
    });
    sound.play();
  }
  handlerTwo() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68438__pinkyfinger__piano-b.wav',
      ],
    });
    sound.play();
  }
  handlerThree() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68439__pinkyfinger__piano-bb.wav',
      ],
    });
    sound.play();
  }
  handlerFour() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68440__pinkyfinger__piano-c.wav',
      ],
    });
    sound.play();
  }
  handlerFive() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68441__pinkyfinger__piano-c.wav',
      ],
    });
    sound.play();
  }
  handlerSix() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68442__pinkyfinger__piano-d.wav',
      ],
    });
    sound.play();
  }
  handlerSeven() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68443__pinkyfinger__piano-e.wav',
      ],
    });
    sound.play();
  }
  handlerEight() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68444__pinkyfinger__piano-eb.wav',
      ],
    });
    sound.play();
  }
  handlerNine() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68445__pinkyfinger__piano-f.wav',
      ],
    });
    sound.play();
  }
  handlerTen() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68446__pinkyfinger__piano-f.wav',
      ],
    });
    sound.play();
  }
  handlerEleven() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68447__pinkyfinger__piano-g.wav',
      ],
    });
    sound.play();
  }
  handlerTwelve() {
    const sound = new Howl({
      src: [
        '../../../assets/Sounds/Piano-notes/68448__pinkyfinger__piano-g.wav',
      ],
    });
    sound.play();
  }
}
