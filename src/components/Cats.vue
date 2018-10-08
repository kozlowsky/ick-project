<script>
    export default {
        name: "Cats",
        data() {
            return {
                imageSource: '',
                images: [
                    'https://i.ytimg.com/vi/QAgy9r331v0/hqdefault.jpg',
                    'https://1.bp.blogspot.com/-5ySdo4G9z-k/WlZrLJW8agI/AAAAAAAB3D8/sxfRq4whKC8BZoQuQaI_PhOdieSLXFgtwCLcBGAs/s1600/funny-cat-293-01.jpg',
                    'https://2.bp.blogspot.com/-P5Vf1l-EYH8/Wcv67QxVM7I/AAAAAAAB0EA/3PNx7l3aXuUOr7nK4BUYG-J-iY_e549-ACLcBGAs/s1600/funny-cat-278-01.jpg',
                    'https://www.outfittrends.com/wp-content/uploads/2018/03/Funny-Cat-Outfits1.jpg',
                    'http://fluffysworld.com/wp-content/uploads/2017/06/We-need-to-talk-human-Cats-acting-weird-funny-laugh.jpg'
                ],
                takenCats: [],
                drawnNumber: -1
            }
        },
        methods: {
            drawCat() {
                let x = Math.floor((Math.random() * this.images.length));
                let newImage = this.images[x];
                while(newImage === this.imageSource) {
                    x = Math.floor((Math.random() * this.images.length));
                    newImage = this.images[x];
                }
                this.drawnNumber = x;
                this.imageSource = this.images[x];
            },
            getCat() {
                this.takenCats.push(this.imageSource);
                this.images.splice(this.drawnNumber, 1);
                this.drawCat();
            }
        },
        created: function() {
            this.drawnNumber = Math.floor(Math.random()*this.images.length);
            this.imageSource = this.images[this.drawnNumber];
        }
    }
</script>

<template>
    <v-container>
        <v-layout fill-height align-center justify-center>
            <v-card v-if="this.images.length > 0" style="width: 500px">
                <v-img :src="imageSource"></v-img>
                <v-card-text>
                    <v-layout column>
                        <p class="text-md-center">THERE ARE {{ this.images.length }} CATS LEFT!</p>
                        <v-btn @click="drawCat" color="info">Losuj</v-btn>
                        <v-btn @click="getCat" color="orange">Wypozycz</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
            <p v-else>THERE ARE NO MORE CATS!</p>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>