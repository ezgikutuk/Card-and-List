import { Component, OnInit } from '@angular/core';


export interface Yemek {
  title: string;
  description: string;
  tag: string;
  date: string;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  yemekler: Yemek[] = [
    {
      title: "Etli Ekmek",
      description: "Ya­pı­lı­şı: Öncelikle hamuru yoğurmak için geniş bir kaseye unu alın tuzunu ilave edin karıştırın ortasını havuz yapıp suyu yavaşça döküp parmak uçlarınız ile yoğurmaya başlayın ve hamur kulak memesi kıvamından biraz daha sert olacak şekilde yoğurmaya devam edin ve hamurun üzerine temiz nemli bir bez örtüp dinlendirin. Etli ekmeğin içini hazırlayama geldi sıra etinizi kaseye alın ve domateslerin kabuklarını soyun rondoya atın ya da rendeleyin biberlerinde çekirdeklerini çıkarıp ince ince kıyın ya da rondada doğrayın soğanı sarmısakları soyup içine doğrayın hepsini kıymanın içine koyun. Tuzunu, kırmızı biberini, kimyon ve karabiberini ekleyin suyunu da döküp yoğurmaya başlayın. Tüm malzemeyin iyice yoğurduğunuzdan emin olduktan sonra hamurdan bezeler yapın ve lahmacun hamuru kalınlığında yani 2 milim kalınlığında açın ve etli ekmek harcını içine yayıp fırın tepsinize koyun. Tepsinin alabildiği kadar doldurun ve sıcak olan fırında 7-8 dakika pişirin ve sıcak olarak yanında salata yeşillikler ile servis yapın. Bu tarif 4-5 kişilik olup hazırlama süresi 1 saat sürer.",
      tag: "tag1",
      date: "01.01.2020"
    },
    {
      title: "Ispanaklı Börek",
      description: "Geniş bir tavaya yağ ve ince ince kıyılmış 3 adet soğanı koyup soğanlar pembeleşinceye kadar kavurun. Ispanağı ekledikten sonra ıspanak suyunu salıp çekene kadar kavurmaya devam edin. Kavrulan ıspanağı ocaktan alın. Peyniri ufalayarak ıspanağa ekleyip karıştırın. Gerekiyorsa biraz tuz ve karabiber ekleyin. Bir kasede yumurtaları çırpıp içine yoğurt ve 1,5 çay brdağı yağ ekleyin. Bir yandan karıştırırken bir yandan da karışımınız ayran ya da boza kıvamına gelene kadar azar azar su ekleyin.Geniş bir fırın tepsisini yağlayın. Yufkanızı tezgaha serip hazırladığınız sıvı karışımı her yerine sürün. Uzunlamasına ıspanak döşeyip yufkayı rulo şeklinde sarın. Tepsinin ortasında gül şeklinde yuvarlayın. Her ruloyu aynı şekilde gülün çevresinde yuvarlayın.Kalan karışımı en son üzerine dökerek böreğinizi önceden 220 derecede ısıttığınız fırına verin.",
      tag: "tag2",
      date: "02.01.2020"
    },
    {
      title: "Lahmacun",
      description: "asdf",
      tag: "tag3",
      date: "03.01.2020"
    },
    {
      title: "Mantı",
      description: "asdf",
      tag: "tag4",
      date: "04.01.2020"
    }
  ]
  yemeklerOther:Yemek[]=[];

  constructor() {
    this.yemeklerOther=this.yemekler.slice(1);
   }

  ngOnInit() {
  }

}
