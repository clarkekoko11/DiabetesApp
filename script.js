// Meal plan data
const mealPlanData = {
    breakfast: [
        { 
            name: "Scrambled eggs with malunggay and fried bangus", 
            emoji: "🥚", 
            items: ["2 scrambled eggs", "1/2 cup malunggay leaves", "1 small fried bangus (milkfish)"],
            nutrition: { carbs: 3, protein: 25, fiber: 2 }
        },
        { 
            name: "Omelet with kangkong and tomatoes", 
            emoji: "🍳", 
            items: ["3-egg omelet", "1/2 cup kangkong (water spinach)", "1/4 cup diced tomatoes"],
            nutrition: { carbs: 4, protein: 18, fiber: 2 }
        },
        { 
            name: "Torta with eggplant and ground pork", 
            emoji: "🍳", 
            items: ["2-egg torta", "1/2 cup eggplant", "2 oz lean ground pork"],
            nutrition: { carbs: 5, protein: 20, fiber: 3 }
        },
        { 
            name: "Cauliflower fried 'rice' with egg", 
            emoji: "🥣", 
            items: ["1 cup cauliflower rice", "1 fried egg", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 15, fiber: 4 }
        },
        { 
            name: "Sardines with ampalaya", 
            emoji: "🐟", 
            items: ["1/2 can sardines in olive oil", "1/2 cup sautéed ampalaya (bitter melon)"],
            nutrition: { carbs: 4, protein: 16, fiber: 3 }
        },
        { 
            name: "Tofu scramble with bell peppers", 
            emoji: "🧆", 
            items: ["1 cup firm tofu", "1/4 cup bell peppers", "1 tbsp olive oil"],
            nutrition: { carbs: 5, protein: 14, fiber: 2 }
        },
        { 
            name: "Pork and malunggay soup", 
            emoji: "🍲", 
            items: ["2 oz lean pork", "1 cup malunggay leaves", "1 cup clear broth"],
            nutrition: { carbs: 3, protein: 18, fiber: 3 }
        },
        { 
            name: "Silog with cauliflower rice", 
            emoji: "🍳", 
            items: ["2 fried eggs", "1 cup cauliflower rice", "1 small piece of grilled fish"],
            nutrition: { carbs: 5, protein: 22, fiber: 3 }
        },
        { 
            name: "Avocado and egg breakfast bowl", 
            emoji: "🥑", 
            items: ["1/2 avocado", "2 soft-boiled eggs", "1 tbsp olive oil", "Pinch of salt"],
            nutrition: { carbs: 6, protein: 16, fiber: 7 }
        },
        { 
            name: "Tinapa flakes with scrambled eggs", 
            emoji: "🐟", 
            items: ["1/4 cup tinapa (smoked fish) flakes", "2 scrambled eggs", "1 tbsp coconut oil"],
            nutrition: { carbs: 2, protein: 20, fiber: 0 }
        },
        { 
            name: "Spinach and mushroom omelet", 
            emoji: "🍄", 
            items: ["3-egg omelet", "1/2 cup spinach", "1/4 cup mushrooms", "1 tbsp olive oil"],
            nutrition: { carbs: 4, protein: 19, fiber: 2 }
        },
        { 
            name: "Beef tapa with cauliflower rice", 
            emoji: "🥩", 
            items: ["3 oz beef tapa (cured beef)", "1 cup cauliflower rice", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 25, fiber: 3 }
        },
        { 
            name: "Coconut flour pancakes with sugar-free syrup", 
            emoji: "🥞", 
            items: ["2 coconut flour pancakes", "1 tbsp sugar-free syrup", "1 tbsp butter"],
            nutrition: { carbs: 8, protein: 10, fiber: 6 }
        },
        { 
            name: "Almond flour waffles with berries", 
            emoji: "🧇", 
            items: ["1 almond flour waffle", "1/4 cup mixed berries", "1 tbsp coconut cream"],
            nutrition: { carbs: 10, protein: 12, fiber: 5 }
        },
        { 
            name: "Chia seed pudding with coconut milk", 
            emoji: "🥥", 
            items: ["2 tbsp chia seeds", "1/2 cup coconut milk", "1/4 tsp vanilla extract"],
            nutrition: { carbs: 8, protein: 6, fiber: 10 }
        },
        { 
            name: "Keto pandesal with cheese and egg", 
            emoji: "🧀", 
            items: ["2 keto pandesal (almond flour bread)", "1 slice cheese", "1 fried egg"],
            nutrition: { carbs: 6, protein: 18, fiber: 4 }
        },
        { 
            name: "Sautéed kangkong with tinapa and eggs", 
            emoji: "🥬", 
            items: ["1 cup sautéed kangkong", "2 tbsp tinapa flakes", "2 fried eggs"],
            nutrition: { carbs: 5, protein: 19, fiber: 3 }
        },
        { 
            name: "Okra and egg stir-fry", 
            emoji: "🍳", 
            items: ["1 cup sliced okra", "2 scrambled eggs", "1 tbsp coconut oil", "1 tsp minced garlic"],
            nutrition: { carbs: 7, protein: 16, fiber: 4 }
        },
        { 
            name: "Eggplant and ground beef hash", 
            emoji: "🍆", 
            items: ["1/2 cup diced eggplant", "2 oz ground beef", "1 tbsp olive oil", "1 tsp minced onion"],
            nutrition: { carbs: 6, protein: 18, fiber: 3 }
        },
        { 
            name: "Coconut flour crepes with sugar-free jam", 
            emoji: "🥞", 
            items: ["2 coconut flour crepes", "1 tbsp sugar-free jam", "1 tbsp butter"],
            nutrition: { carbs: 7, protein: 8, fiber: 5 }
        },
        { 
            name: "Zucchini and egg frittata", 
            emoji: "🥒", 
            items: ["1/2 cup zucchini", "3 eggs", "1 tbsp olive oil", "1 tbsp grated cheese"],
            nutrition: { carbs: 5, protein: 20, fiber: 2 }
        },
        { 
            name: "Almond flour muffin with chia seeds", 
            emoji: "🧁", 
            items: ["1 almond flour muffin", "1 tbsp chia seeds", "1 tbsp coconut oil"],
            nutrition: { carbs: 8, protein: 10, fiber: 8 }
        },
        { 
            name: "Coconut yogurt with berries and nuts", 
            emoji: "🥥", 
            items: ["1/2 cup coconut yogurt", "1/4 cup mixed berries", "1 tbsp chopped nuts"],
            nutrition: { carbs: 9, protein: 5, fiber: 6 }
        },
        { 
            name: "Shirataki noodles with tinapa flakes", 
            emoji: "🍜", 
            items: ["1 cup shirataki noodles", "2 tbsp tinapa flakes", "1 tsp sesame oil", "1 tsp soy sauce"],
            nutrition: { carbs: 2, protein: 12, fiber: 4 }
        },
        { 
            name: "Keto arroz caldo with chicken", 
            emoji: "🍲", 
            items: ["1 cup cauliflower rice", "2 oz shredded chicken", "1 cup chicken broth", "1 tsp ginger"],
            nutrition: { carbs: 6, protein: 20, fiber: 3 }
        },
        { 
            name: "Coconut flour banana pancakes (small portion)", 
            emoji: "🥞", 
            items: ["2 small coconut flour pancakes", "1/4 small banana", "1 tbsp almond butter"],
            nutrition: { carbs: 12, protein: 10, fiber: 7 }
        },
        { 
            name: "Egg muffins with spinach and cheese", 
            emoji: "🥚", 
            items: ["2 egg muffins", "1/4 cup spinach", "1 tbsp cheese", "1 tsp coconut oil"],
            nutrition: { carbs: 3, protein: 16, fiber: 1 }
        },
        { 
            name: "Keto champorado with coconut milk", 
            emoji: "🥣", 
            items: ["1/4 cup chia seeds", "1/2 cup coconut milk", "1 tsp unsweetened cocoa powder", "1 tsp stevia"],
            nutrition: { carbs: 8, protein: 6, fiber: 12 }
        },
        { 
            name: "Tuyo with cauliflower fried rice", 
            emoji: "🐟", 
            items: ["2 pieces tuyo (dried fish)", "1 cup cauliflower fried rice", "1 tsp coconut oil"],
            nutrition: { carbs: 5, protein: 18, fiber: 3 }
        },
        { 
            name: "Almond flour bibingka (small portion)", 
            emoji: "🥮", 
            items: ["1 small almond flour bibingka", "1 tbsp grated coconut", "1 tsp butter"],
            nutrition: { carbs: 10, protein: 8, fiber: 5 }
        },
        { 
            name: "Vegetable and egg soup", 
            emoji: "🥣", 
            items: ["1 cup mixed vegetables (cabbage, spinach, celery)", "2 poached eggs", "1 cup chicken broth"],
            nutrition: { carbs: 6, protein: 16, fiber: 4 }
        },
        { 
            name: "Keto ensaymada with cheese", 
            emoji: "🧀", 
            items: ["1 keto ensaymada (almond flour)", "1 tbsp grated cheese", "1 tsp butter"],
            nutrition: { carbs: 7, protein: 10, fiber: 4 }
        },
        { 
            name: "Flaxseed porridge with coconut milk", 
            emoji: "🥣", 
            items: ["2 tbsp ground flaxseed", "1/2 cup coconut milk", "1 tsp cinnamon", "1 tsp stevia"],
            nutrition: { carbs: 6, protein: 5, fiber: 8 }
        },
        { 
            name: "Keto puto with cheese", 
            emoji: "🍰", 
            items: ["2 small keto puto (coconut flour)", "1 tbsp grated cheese", "1 tsp butter"],
            nutrition: { carbs: 8, protein: 9, fiber: 5 }
        },
        { 
            name: "Malunggay smoothie with coconut milk", 
            emoji: "🥤", 
            items: ["1 cup malunggay leaves", "1/2 cup coconut milk", "1/4 avocado", "1 tsp stevia"],
            nutrition: { carbs: 7, protein: 5, fiber: 6 }
        },
        { 
            name: "Keto pan de coco", 
            emoji: "🥥", 
            items: ["2 small keto pan de coco (coconut flour)", "1 tbsp coconut filling (unsweetened)", "1 tsp butter"],
            nutrition: { carbs: 9, protein: 7, fiber: 6 }
        },
        { 
            name: "Spinach and feta cheese omelet", 
            emoji: "🍳", 
            items: ["3-egg omelet", "1/2 cup spinach", "1 tbsp feta cheese", "1 tsp olive oil"],
            nutrition: { carbs: 3, protein: 20, fiber: 2 }
        },
        { 
            name: "Keto biko (coconut rice cake)", 
            emoji: "🥥", 
            items: ["1/2 cup shredded coconut", "2 tbsp coconut cream", "1 tsp stevia", "1 tsp coconut oil"],
            nutrition: { carbs: 8, protein: 4, fiber: 5 }
        },
        { 
            name: "Almond flour pancakes with sugar-free syrup", 
            emoji: "🥞", 
            items: ["2 almond flour pancakes", "1 tbsp sugar-free syrup", "1 tsp butter"],
            nutrition: { carbs: 7, protein: 12, fiber: 6 }
        },
        { 
            name: "Coconut flour toast with avocado", 
            emoji: "🥑", 
            items: ["1 slice coconut flour bread", "1/4 avocado", "1 tsp olive oil", "Pinch of salt"],
            nutrition: { carbs: 8, protein: 6, fiber: 8 }
        }
    ],
    lunch: [
        { 
            name: "Grilled chicken breast with sautéed ampalaya", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken breast", "1 cup sautéed ampalaya", "1 tbsp olive oil"],
            nutrition: { carbs: 5, protein: 28, fiber: 4 }
        },
        { 
            name: "Grilled tilapia with sautéed sayote", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup sautéed sayote (chayote)", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 24, fiber: 3 }
        },
        { 
            name: "Galunggong with ginisang pechay", 
            emoji: "🐟", 
            items: ["1 medium galunggong (mackerel scad)", "1 cup ginisang pechay (bok choy)"],
            nutrition: { carbs: 4, protein: 22, fiber: 3 }
        },
        { 
            name: "Pork sinigang with kangkong (low-sodium)", 
            emoji: "🍲", 
            items: ["3 oz lean pork", "1 cup kangkong", "1/2 cup radish", "Low-sodium sinigang broth"],
            nutrition: { carbs: 7, protein: 25, fiber: 4 }
        },
        { 
            name: "Chicken adobo with cauliflower rice", 
            emoji: "🍗", 
            items: ["4 oz chicken adobo (low-sodium)", "1 cup cauliflower rice"],
            nutrition: { carbs: 6, protein: 26, fiber: 3 }
        },
        { 
            name: "Ginisang monggo with malunggay and tinapa", 
            emoji: "🥣", 
            items: ["1/2 cup monggo (mung beans)", "1/2 cup malunggay leaves", "1 oz tinapa (smoked fish)"],
            nutrition: { carbs: 15, protein: 18, fiber: 8 }
        },
        { 
            name: "Beef nilaga with cabbage and string beans", 
            emoji: "🍲", 
            items: ["3 oz lean beef", "1 cup cabbage", "1/2 cup string beans", "Clear broth"],
            nutrition: { carbs: 8, protein: 24, fiber: 5 }
        },
        { 
            name: "Grilled bangus belly with ensaladang talong", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus belly", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Chicken tinola with malunggay and sayote", 
            emoji: "🍲", 
            items: ["4 oz chicken", "1/2 cup malunggay leaves", "1/2 cup sayote", "Ginger broth"],
            nutrition: { carbs: 6, protein: 26, fiber: 3 }
        },
        { 
            name: "Beef tapa with cauliflower rice and egg", 
            emoji: "🥩", 
            items: ["3 oz beef tapa", "1 cup cauliflower rice", "1 fried egg"],
            nutrition: { carbs: 6, protein: 28, fiber: 3 }
        },
        { 
            name: "Ginisang sitaw at kalabasa with pork", 
            emoji: "🥬", 
            items: ["1 cup string beans", "1/2 cup kalabasa (squash)", "2 oz lean pork"],
            nutrition: { carbs: 10, protein: 15, fiber: 6 }
        },
        { 
            name: "Grilled liempo with ensaladang talong", 
            emoji: "🍖", 
            items: ["3 oz lean grilled liempo (pork belly)", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 5, protein: 20, fiber: 4 }
        },
        { 
            name: "Pesang dalag with pechay and sayote", 
            emoji: "🐟", 
            items: ["4 oz dalag (mudfish)", "1/2 cup pechay", "1/2 cup sayote", "Clear ginger broth"],
            nutrition: { carbs: 5, protein: 24, fiber: 3 }
        },
        { 
            name: "Keto pancit bihon with vegetables", 
            emoji: "🥢", 
            items: ["1 cup shirataki noodles", "1/2 cup mixed vegetables", "2 oz chicken", "1 tbsp soy sauce"],
            nutrition: { carbs: 6, protein: 18, fiber: 4 }
        },
        { 
            name: "Grilled tuna steak with kangkong salad", 
            emoji: "🐟", 
            items: ["4 oz grilled tuna steak", "1 cup kangkong salad", "1 tbsp calamansi juice"],
            nutrition: { carbs: 4, protein: 28, fiber: 3 }
        },
        { 
            name: "Beef bulalo with cabbage and pechay (low-sodium)", 
            emoji: "🍲", 
            items: ["3 oz beef", "1/2 cup cabbage", "1/2 cup pechay", "Clear beef broth"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Ginataang langka with shrimp (small portion)", 
            emoji: "🥥", 
            items: ["1/2 cup young jackfruit", "2 oz shrimp", "1/2 cup coconut milk"],
            nutrition: { carbs: 12, protein: 16, fiber: 5 }
        },
        { 
            name: "Grilled pork chop with pinakbet", 
            emoji: "🍖", 
            items: ["3 oz grilled pork chop", "1 cup pinakbet (mixed vegetables)"],
            nutrition: { carbs: 8, protein: 22, fiber: 5 }
        },
        { 
            name: "Chicken inasal with ensaladang talong", 
            emoji: "🍗", 
            items: ["4 oz chicken inasal", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 5, protein: 26, fiber: 4 }
        },
        { 
            name: "Ginisang ampalaya with egg", 
            emoji: "🥬", 
            items: ["1 cup sautéed ampalaya", "2 scrambled eggs", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 16, fiber: 4 }
        },
        { 
            name: "Grilled tilapia with steamed okra", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup steamed okra", "1 tbsp calamansi juice"],
            nutrition: { carbs: 7, protein: 24, fiber: 5 }
        },
        { 
            name: "Beef kare-kare with cauliflower (no rice)", 
            emoji: "🥩", 
            items: ["3 oz beef", "1 cup mixed vegetables", "2 tbsp sugar-free peanut sauce"],
            nutrition: { carbs: 10, protein: 22, fiber: 6 }
        },
        { 
            name: "Chicken afritada with cauliflower rice", 
            emoji: "🍗", 
            items: ["4 oz chicken", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1 cup cauliflower rice"],
            nutrition: { carbs: 9, protein: 26, fiber: 4 }
        },
        { 
            name: "Ginisang repolyo with ground pork", 
            emoji: "🥬", 
            items: ["1 cup cabbage", "2 oz ground pork", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 16, fiber: 3 }
        },
        { 
            name: "Grilled bangus with ensaladang kamatis", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus", "1/2 cup tomato salad", "1 tbsp calamansi juice"],
            nutrition: { carbs: 5, protein: 24, fiber: 2 }
        },
        { 
            name: "Pork menudo with cauliflower (no rice)", 
            emoji: "🍖", 
            items: ["3 oz pork", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1/2 cup cauliflower"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang upo with shrimp", 
            emoji: "🦐", 
            items: ["1 cup upo (bottle gourd)", "2 oz shrimp", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 16, fiber: 3 }
        },
        { 
            name: "Grilled chicken with cucumber salad", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1 cup cucumber salad", "1 tbsp vinegar"],
            nutrition: { carbs: 4, protein: 26, fiber: 2 }
        },
        { 
            name: "Beef caldereta with cauliflower (no rice)", 
            emoji: "🥩", 
            items: ["3 oz beef", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1/2 cup cauliflower"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang togue with chicken", 
            emoji: "🌱", 
            items: ["1 cup bean sprouts", "2 oz chicken", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 18, fiber: 3 }
        },
        { 
            name: "Grilled pork with sinigang na kangkong", 
            emoji: "🍖", 
            items: ["3 oz grilled pork", "1 cup kangkong sinigang", "Low-sodium sinigang broth"],
            nutrition: { carbs: 5, protein: 22, fiber: 3 }
        },
        { 
            name: "Chicken sopas with cauliflower (no pasta)", 
            emoji: "🍲", 
            items: ["3 oz chicken", "1/2 cup cabbage", "1/2 cup cauliflower", "Chicken broth"],
            nutrition: { carbs: 6, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang pechay with tofu", 
            emoji: "🥬", 
            items: ["1 cup pechay", "1/2 cup tofu", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 12, fiber: 3 }
        },
        { 
            name: "Grilled bangus with okra and bagoong", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus", "1 cup okra", "1 tsp low-sodium bagoong"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Beef mechado with cauliflower rice", 
            emoji: "🥩", 
            items: ["3 oz beef", "1/4 cup tomato sauce", "1 cup cauliflower rice"],
            nutrition: { carbs: 7, protein: 24, fiber: 3 }
        },
        { 
            name: "Ginisang sayote with chicken", 
            emoji: "🍗", 
            items: ["1 cup sayote", "2 oz chicken", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 18, fiber: 3 }
        },
        { 
            name: "Grilled tilapia with malunggay soup", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup malunggay soup", "1 tsp coconut oil"],
            nutrition: { carbs: 4, protein: 26, fiber: 3 }
        },
        { 
            name: "Pork bicol express with cauliflower rice", 
            emoji: "🌶️", 
            items: ["3 oz pork", "1/2 cup coconut milk", "1 cup cauliflower rice"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang ampalaya with tinapa", 
            emoji: "🥬", 
            items: ["1 cup ampalaya", "2 tbsp tinapa flakes", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 14, fiber: 4 }
        },
        { 
            name: "Grilled chicken with cucumber and tomato salad", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1/2 cup cucumber", "1/2 cup tomato", "1 tbsp vinegar"],
            nutrition: { carbs: 6, protein: 26, fiber: 3 }
        }
    ],
    dinner: [
        { 
            name: "Sinigang na bangus with okra and talbos ng kamote", 
            emoji: "🍲", 
            items: ["4 oz bangus (milkfish)", "1/2 cup okra", "1/2 cup talbos ng kamote (sweet potato leaves)", "Low-sodium sinigang broth"],
            nutrition: { carbs: 7, protein: 23, fiber: 5 }
        },
        { 
            name: "Pork sinigang with kangkong and eggplant", 
            emoji: "🍖", 
            items: ["3 oz lean pork", "1/2 cup kangkong", "1/2 cup eggplant", "Low-sodium sinigang broth"],
            nutrition: { carbs: 6, protein: 22, fiber: 4 }
        },
        { 
            name: "Chicken tinola with papaya and malunggay", 
            emoji: "🍲", 
            items: ["4 oz chicken", "1/2 cup green papaya", "1/2 cup malunggay leaves", "Ginger broth"],
            nutrition: { carbs: 8, protein: 25, fiber: 4 }
        },
        { 
            name: "Grilled bangus with ensaladang talong", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus (milkfish)", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Ginisang sitaw at kalabasa", 
            emoji: "🥬", 
            items: ["1 cup string beans", "1/2 cup kalabasa (squash)", "2 oz lean pork"],
            nutrition: { carbs: 10, protein: 15, fiber: 6 }
        },
        { 
            name: "Inihaw na liempo with ensaladang ampalaya", 
            emoji: "🍖", 
            items: ["3 oz lean grilled liempo (pork belly)", "1 cup ampalaya salad"],
            nutrition: { carbs: 5, protein: 20, fiber: 4 }
        },
        { 
            name: "Pesang dalag with pechay and sayote", 
            emoji: "🐟", 
            items: ["4 oz dalag (mudfish)", "1/2 cup pechay", "1/2 cup sayote", "Clear ginger broth"],
            nutrition: { carbs: 5, protein: 24, fiber: 3 }
        },
        { 
            name: "Grilled tilapia with steamed kangkong", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup steamed kangkong", "1 tbsp coconut oil"],
            nutrition: { carbs: 4, protein: 24, fiber: 3 }
        },
        { 
            name: "Chicken adobo with cauliflower rice (low-sodium)", 
            emoji: "🍗", 
            items: ["4 oz chicken adobo", "1 cup cauliflower rice", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 26, fiber: 3 }
        },
        { 
            name: "Beef nilaga with cabbage (low-sodium)", 
            emoji: "🍲", 
            items: ["3 oz lean beef", "1 cup cabbage", "Clear beef broth"],
            nutrition: { carbs: 5, protein: 24, fiber: 3 }
        },
        { 
            name: "Ginisang monggo with malunggay and tinapa", 
            emoji: "🥣", 
            items: ["1/2 cup monggo (mung beans)", "1/2 cup malunggay leaves", "1 oz tinapa (smoked fish)"],
            nutrition: { carbs: 15, protein: 18, fiber: 8 }
        },
        { 
            name: "Grilled pork chop with sautéed kangkong", 
            emoji: "🍖", 
            items: ["3 oz grilled pork chop", "1 cup sautéed kangkong", "1 tbsp olive oil"],
            nutrition: { carbs: 4, protein: 22, fiber: 3 }
        },
        { 
            name: "Sinigang na bangus with kangkong (low-sodium)", 
            emoji: "🍲", 
            items: ["4 oz bangus (milkfish)", "1 cup kangkong", "Low-sodium sinigang broth"],
            nutrition: { carbs: 5, protein: 24, fiber: 3 }
        },
        { 
            name: "Chicken tinola with malunggay and sayote", 
            emoji: "🍲", 
            items: ["4 oz chicken", "1/2 cup malunggay leaves", "1/2 cup sayote", "Ginger broth"],
            nutrition: { carbs: 6, protein: 26, fiber: 3 }
        },
        { 
            name: "Grilled bangus belly with steamed okra", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus belly", "1 cup steamed okra", "1 tbsp calamansi juice"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Ginataang gulay with shrimp (small portion)", 
            emoji: "🥥", 
            items: ["1 cup mixed vegetables", "2 oz shrimp", "1/4 cup coconut milk"],
            nutrition: { carbs: 10, protein: 16, fiber: 5 }
        },
        { 
            name: "Grilled chicken with sautéed ampalaya", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1 cup sautéed ampalaya", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 26, fiber: 4 }
        },
        { 
            name: "Beef tapa with cauliflower rice", 
            emoji: "🥩", 
            items: ["3 oz beef tapa", "1 cup cauliflower rice", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 24, fiber: 3 }
        },
        { 
            name: "Ginisang sitaw at kalabasa with chicken", 
            emoji: "🥬", 
            items: ["1 cup string beans", "1/2 cup kalabasa (squash)", "2 oz chicken"],
            nutrition: { carbs: 10, protein: 16, fiber: 6 }
        },
        { 
            name: "Grilled tuna with ensaladang talong", 
            emoji: "🐟", 
            items: ["4 oz grilled tuna", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 5, protein: 28, fiber: 4 }
        },
        { 
            name: "Keto sinigang na baboy with kangkong", 
            emoji: "🍲", 
            items: ["3 oz pork", "1 cup kangkong", "Low-sodium sinigang broth"],
            nutrition: { carbs: 4, protein: 22, fiber: 3 }
        },
        { 
            name: "Grilled liempo with steamed vegetables", 
            emoji: "🍖", 
            items: ["3 oz lean grilled liempo (pork belly)", "1 cup mixed steamed vegetables"],
            nutrition: { carbs: 6, protein: 20, fiber: 4 }
        },
        { 
            name: "Pesang isda with pechay", 
            emoji: "🐟", 
            items: ["4 oz white fish", "1 cup pechay", "Clear ginger broth"],
            nutrition: { carbs: 4, protein: 24, fiber: 2 }
        },
        { 
            name: "Keto pancit shirataki with vegetables", 
            emoji: "🥢", 
            items: ["1 cup shirataki noodles", "1/2 cup mixed vegetables", "2 oz chicken", "1 tbsp soy sauce"],
            nutrition: { carbs: 6, protein: 18, fiber: 4 }
        },
        { 
            name: "Grilled pork with ensaladang talong", 
            emoji: "🍖", 
            items: ["3 oz grilled pork", "1 cup ensaladang talong (eggplant salad)"],
            nutrition: { carbs: 5, protein: 22, fiber: 4 }
        },
        { 
            name: "Beef bulalo with cabbage (low-sodium)", 
            emoji: "🍲", 
            items: ["3 oz beef", "1 cup cabbage", "Clear beef broth"],
            nutrition: { carbs: 5, protein: 24, fiber: 3 }
        },
        { 
            name: "Grilled chicken with steamed okra", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1 cup steamed okra", "1 tbsp olive oil"],
            nutrition: { carbs: 6, protein: 26, fiber: 4 }
        },
        { 
            name: "Ginisang ampalaya with ground beef", 
            emoji: "🥬", 
            items: ["1 cup ampalaya", "2 oz ground beef", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 18, fiber: 4 }
        },
        { 
            name: "Grilled tilapia with steamed vegetables", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup mixed steamed vegetables", "1 tbsp olive oil"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Beef kare-kare with vegetables (no rice)", 
            emoji: "🥩", 
            items: ["3 oz beef", "1 cup mixed vegetables", "2 tbsp sugar-free peanut sauce"],
            nutrition: { carbs: 10, protein: 22, fiber: 6 }
        },
        { 
            name: "Chicken afritada with cauliflower rice", 
            emoji: "🍗", 
            items: ["4 oz chicken", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1 cup cauliflower rice"],
            nutrition: { carbs: 9, protein: 26, fiber: 4 }
        },
        { 
            name: "Ginisang repolyo with tinapa", 
            emoji: "🥬", 
            items: ["1 cup cabbage", "2 tbsp tinapa flakes", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 14, fiber: 3 }
        },
        { 
            name: "Grilled bangus with steamed kangkong", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus", "1 cup steamed kangkong", "1 tbsp calamansi juice"],
            nutrition: { carbs: 4, protein: 24, fiber: 3 }
        },
        { 
            name: "Pork menudo with cauliflower (no rice)", 
            emoji: "🍖", 
            items: ["3 oz pork", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1/2 cup cauliflower"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang upo with chicken", 
            emoji: "🍗", 
            items: ["1 cup upo (bottle gourd)", "2 oz chicken", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 18, fiber: 3 }
        },
        { 
            name: "Grilled pork with cucumber salad", 
            emoji: "🍖", 
            items: ["3 oz grilled pork", "1 cup cucumber salad", "1 tbsp vinegar"],
            nutrition: { carbs: 4, protein: 22, fiber: 2 }
        },
        { 
            name: "Beef caldereta with cauliflower (no rice)", 
            emoji: "🥩", 
            items: ["3 oz beef", "1/2 cup bell peppers", "1/4 cup tomato sauce", "1/2 cup cauliflower"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang togue with tofu", 
            emoji: "🌱", 
            items: ["1 cup bean sprouts", "1/2 cup tofu", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 12, fiber: 3 }
        },
        { 
            name: "Grilled chicken with sinigang na kangkong", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1 cup kangkong sinigang", "Low-sodium sinigang broth"],
            nutrition: { carbs: 5, protein: 26, fiber: 3 }
        },
        { 
            name: "Chicken sopas with cauliflower (no pasta)", 
            emoji: "🍲", 
            items: ["3 oz chicken", "1/2 cup cabbage", "1/2 cup cauliflower", "Chicken broth"],
            nutrition: { carbs: 6, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang pechay with shrimp", 
            emoji: "🦐", 
            items: ["1 cup pechay", "2 oz shrimp", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 16, fiber: 3 }
        },
        { 
            name: "Grilled tilapia with okra and bagoong", 
            emoji: "🐟", 
            items: ["4 oz grilled tilapia", "1 cup okra", "1 tsp low-sodium bagoong"],
            nutrition: { carbs: 6, protein: 24, fiber: 4 }
        },
        { 
            name: "Beef mechado with cauliflower rice", 
            emoji: "🥩", 
            items: ["3 oz beef", "1/4 cup tomato sauce", "1 cup cauliflower rice"],
            nutrition: { carbs: 7, protein: 24, fiber: 3 }
        },
        { 
            name: "Ginisang sayote with tinapa", 
            emoji: "🐟", 
            items: ["1 cup sayote", "2 tbsp tinapa flakes", "1 tbsp coconut oil"],
            nutrition: { carbs: 6, protein: 14, fiber: 3 }
        },
        { 
            name: "Grilled chicken with malunggay soup", 
            emoji: "🍗", 
            items: ["4 oz grilled chicken", "1 cup malunggay soup", "1 tsp coconut oil"],
            nutrition: { carbs: 4, protein: 26, fiber: 3 }
        },
        { 
            name: "Pork bicol express with cauliflower rice", 
            emoji: "🌶️", 
            items: ["3 oz pork", "1/2 cup coconut milk", "1 cup cauliflower rice"],
            nutrition: { carbs: 8, protein: 22, fiber: 3 }
        },
        { 
            name: "Ginisang ampalaya with egg", 
            emoji: "🥬", 
            items: ["1 cup ampalaya", "2 scrambled eggs", "1 tbsp coconut oil"],
            nutrition: { carbs: 5, protein: 16, fiber: 4 }
        },
        { 
            name: "Grilled bangus with cucumber and tomato salad", 
            emoji: "🐟", 
            items: ["4 oz grilled bangus", "1/2 cup cucumber", "1/2 cup tomato", "1 tbsp vinegar"],
            nutrition: { carbs: 6, protein: 24, fiber: 3 }
        }
    ],
    snacks: [
        { 
            name: "Cucumber slices with bagoong", 
            emoji: "🥒", 
            items: ["1 cup cucumber slices", "1 tsp low-sodium bagoong"],
            nutrition: { carbs: 3, protein: 1, fiber: 1 }
        },
        { 
            name: "Hard-boiled egg", 
            emoji: "🥚", 
            items: ["1 hard-boiled egg"],
            nutrition: { carbs: 0, protein: 6, fiber: 0 }
        },
        { 
            name: "Tinapa flakes with cucumber", 
            emoji: "🐟", 
            items: ["2 tbsp tinapa flakes", "1/2 cup cucumber slices"],
            nutrition: { carbs: 2, protein: 8, fiber: 1 }
        },
        { 
            name: "Celery sticks with almond butter", 
            emoji: "🥬", 
            items: ["1 cup celery sticks", "1 tbsp almond butter"],
            nutrition: { carbs: 4, protein: 4, fiber: 2 }
        },
        { 
            name: "Keto cheese chips", 
            emoji: "🧀", 
            items: ["1/4 cup grated cheese (baked until crispy)"],
            nutrition: { carbs: 1, protein: 7, fiber: 0 }
        },
        { 
            name: "Avocado slices", 
            emoji: "🥑", 
            items: ["1/2 small avocado", "Pinch of salt"],
            nutrition: { carbs: 6, protein: 2, fiber: 5 }
        },
        { 
            name: "Coconut meat strips", 
            emoji: "🥥", 
            items: ["1/4 cup fresh coconut meat strips"],
            nutrition: { carbs: 3, protein: 1, fiber: 2 }
        },
        { 
            name: "Pork rinds (chicharon)", 
            emoji: "🥓", 
            items: ["1/2 oz pork rinds"],
            nutrition: { carbs: 0, protein: 9, fiber: 0 }
        },
        { 
            name: "Keto bibingka bites", 
            emoji: "🥮", 
            items: ["2 small keto bibingka bites (almond flour)"],
            nutrition: { carbs: 4, protein: 3, fiber: 2 }
        },
        { 
            name: "Seaweed strips", 
            emoji: "🌊", 
            items: ["1 pack seaweed strips"],
            nutrition: { carbs: 1, protein: 1, fiber: 1 }
        },
        { 
            name: "Mixed nuts (small portion)", 
            emoji: "🥜", 
            items: ["1/4 cup mixed nuts"],
            nutrition: { carbs: 4, protein: 5, fiber: 3 }
        },
        { 
            name: "Keto puto (small)", 
            emoji: "🍰", 
            items: ["2 small keto puto (coconut flour)"],
            nutrition: { carbs: 4, protein: 3, fiber: 2 }
        },
        { 
            name: "Cheese cubes", 
            emoji: "🧀", 
            items: ["1 oz cheese cubes"],
            nutrition: { carbs: 1, protein: 7, fiber: 0 }
        },
        { 
            name: "Chia seed pudding (small)", 
            emoji: "🥄", 
            items: ["1/4 cup chia seed pudding with coconut milk"],
            nutrition: { carbs: 4, protein: 3, fiber: 5 }
        },
        { 
            name: "Keto pandesal (small)", 
            emoji: "🍞", 
            items: ["1 small keto pandesal (almond flour)"],
            nutrition: { carbs: 3, protein: 4, fiber: 2 }
        },
        { 
            name: "Cucumber and cheese roll-ups", 
            emoji: "🥒", 
            items: ["1/2 cup cucumber sticks", "1 oz cream cheese"],
            nutrition: { carbs: 2, protein: 4, fiber: 1 }
        },
        { 
            name: "Tinapa lettuce wraps", 
            emoji: "🥬", 
            items: ["2 lettuce leaves", "1 tbsp tinapa flakes"],
            nutrition: { carbs: 1, protein: 6, fiber: 1 }
        },
        { 
            name: "Keto leche flan (small)", 
            emoji: "🍮", 
            items: ["1 small keto leche flan (with stevia)"],
            nutrition: { carbs: 3, protein: 4, fiber: 0 }
        },
        { 
            name: "Beef jerky (small portion)", 
            emoji: "🥩", 
            items: ["1/2 oz beef jerky"],
            nutrition: { carbs: 2, protein: 8, fiber: 0 }
        },
        { 
            name: "Keto maja blanca (small)", 
            emoji: "🥥", 
            items: ["1 small piece keto maja blanca (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Bell pepper strips with cream cheese", 
            emoji: "🫑", 
            items: ["1/2 cup bell pepper strips", "1 tbsp cream cheese"],
            nutrition: { carbs: 3, protein: 2, fiber: 1 }
        },
        { 
            name: "Keto ensaymada (small)", 
            emoji: "🧀", 
            items: ["1 small keto ensaymada (almond flour)"],
            nutrition: { carbs: 3, protein: 4, fiber: 2 }
        },
        { 
            name: "Coconut yogurt (small)", 
            emoji: "🥥", 
            items: ["1/4 cup coconut yogurt"],
            nutrition: { carbs: 3, protein: 1, fiber: 2 }
        },
        { 
            name: "Keto polvoron (small)", 
            emoji: "🍪", 
            items: ["2 small keto polvoron (almond flour)"],
            nutrition: { carbs: 3, protein: 3, fiber: 2 }
        },
        { 
            name: "Boiled quail eggs", 
            emoji: "🥚", 
            items: ["3 boiled quail eggs"],
            nutrition: { carbs: 1, protein: 5, fiber: 0 }
        },
        { 
            name: "Keto palitaw (small)", 
            emoji: "🥮", 
            items: ["2 small keto palitaw (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Macadamia nuts (small portion)", 
            emoji: "🌰", 
            items: ["10 macadamia nuts"],
            nutrition: { carbs: 2, protein: 2, fiber: 2 }
        },
        { 
            name: "Keto kutsinta (small)", 
            emoji: "🍮", 
            items: ["2 small keto kutsinta (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Olives (small portion)", 
            emoji: "🫒", 
            items: ["10 olives"],
            nutrition: { carbs: 1, protein: 0, fiber: 1 }
        },
        { 
            name: "Keto tupig (small)", 
            emoji: "🥥", 
            items: ["1 small keto tupig (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Cucumber kimchi (small portion)", 
            emoji: "🥒", 
            items: ["1/4 cup cucumber kimchi"],
            nutrition: { carbs: 2, protein: 1, fiber: 1 }
        },
        { 
            name: "Keto suman (small)", 
            emoji: "🍚", 
            items: ["1 small keto suman (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Sardines in olive oil (small portion)", 
            emoji: "🐟", 
            items: ["2 pieces sardines in olive oil"],
            nutrition: { carbs: 0, protein: 5, fiber: 0 }
        },
        { 
            name: "Keto biko (small)", 
            emoji: "🥥", 
            items: ["1 small piece keto biko (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Cauliflower hummus with celery", 
            emoji: "🥬", 
            items: ["2 tbsp cauliflower hummus", "1/2 cup celery sticks"],
            nutrition: { carbs: 3, protein: 2, fiber: 2 }
        },
        { 
            name: "Keto sapin-sapin (small)", 
            emoji: "🍮", 
            items: ["1 small piece keto sapin-sapin (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Tuna lettuce cups", 
            emoji: "🥬", 
            items: ["2 lettuce cups", "2 tbsp tuna flakes"],
            nutrition: { carbs: 1, protein: 7, fiber: 1 }
        },
        { 
            name: "Keto cassava cake (small)", 
            emoji: "🍰", 
            items: ["1 small piece keto cassava cake (almond flour)"],
            nutrition: { carbs: 4, protein: 3, fiber: 2 }
        },
        { 
            name: "Pickled radish (small portion)", 
            emoji: "🥬", 
            items: ["1/4 cup pickled radish"],
            nutrition: { carbs: 2, protein: 0, fiber: 1 }
        },
        { 
            name: "Keto kalamay (small)", 
            emoji: "🥥", 
            items: ["1 small piece keto kalamay (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Egg salad in lettuce cups", 
            emoji: "🥬", 
            items: ["2 tbsp egg salad", "2 lettuce cups"],
            nutrition: { carbs: 1, protein: 6, fiber: 1 }
        },
        { 
            name: "Keto hopia (small)", 
            emoji: "🥮", 
            items: ["1 small keto hopia (almond flour)"],
            nutrition: { carbs: 3, protein: 3, fiber: 2 }
        },
        { 
            name: "Cucumber with tuna", 
            emoji: "🥒", 
            items: ["1/2 cup cucumber slices", "2 tbsp tuna flakes"],
            nutrition: { carbs: 2, protein: 7, fiber: 1 }
        },
        { 
            name: "Keto pan de coco (small)", 
            emoji: "🥥", 
            items: ["1 small keto pan de coco (coconut flour)"],
            nutrition: { carbs: 3, protein: 3, fiber: 2 }
        },
        { 
            name: "Seaweed salad (small portion)", 
            emoji: "🌊", 
            items: ["1/4 cup seaweed salad"],
            nutrition: { carbs: 2, protein: 1, fiber: 2 }
        },
        { 
            name: "Keto pichi-pichi (small)", 
            emoji: "🥥", 
            items: ["2 small keto pichi-pichi (coconut flour)"],
            nutrition: { carbs: 4, protein: 2, fiber: 3 }
        },
        { 
            name: "Chicken skin (small portion)", 
            emoji: "🍗", 
            items: ["1/2 oz crispy chicken skin"],
            nutrition: { carbs: 0, protein: 7, fiber: 0 }
        },
        { 
            name: "Keto yema (small)", 
            emoji: "🍮", 
            items: ["1 small keto yema (with stevia)"],
            nutrition: { carbs: 3, protein: 3, fiber: 0 }
        },
        { 
            name: "Cucumber with bagoong", 
            emoji: "🥒", 
            items: ["1/2 cup cucumber slices", "1 tsp low-sodium bagoong"],
            nutrition: { carbs: 2, protein: 1, fiber: 1 }
        }
    ]
};

// Additional Filipino ingredients for meal generation
const filipinoIngredients = {
    proteins: [
        { name: "bangus (milkfish)", emoji: "🐟", nutrition: { carbs: 0, protein: 20, fiber: 0 } },
        { name: "tilapia", emoji: "🐟", nutrition: { carbs: 0, protein: 18, fiber: 0 } },
        { name: "galunggong (mackerel scad)", emoji: "🐟", nutrition: { carbs: 0, protein: 19, fiber: 0 } },
        { name: "tuna", emoji: "🐟", nutrition: { carbs: 0, protein: 25, fiber: 0 } },
        { name: "chicken breast", emoji: "🍗", nutrition: { carbs: 0, protein: 26, fiber: 0 } },
        { name: "chicken thigh", emoji: "🍗", nutrition: { carbs: 0, protein: 24, fiber: 0 } },
        { name: "lean pork", emoji: "🥩", nutrition: { carbs: 0, protein: 22, fiber: 0 } },
        { name: "tofu", emoji: "🧆", nutrition: { carbs: 2, protein: 8, fiber: 1 } },
        { name: "eggs", emoji: "🥚", nutrition: { carbs: 1, protein: 6, fiber: 0 } },
        { name: "tinapa (smoked fish)", emoji: "🐟", nutrition: { carbs: 0, protein: 18, fiber: 0 } },
        { name: "beef", emoji: "🥩", nutrition: { carbs: 0, protein: 26, fiber: 0 } },
        { name: "shrimp", emoji: "🦐", nutrition: { carbs: 0, protein: 20, fiber: 0 } },
        { name: "squid", emoji: "🦑", nutrition: { carbs: 3, protein: 15, fiber: 0 } },
        { name: "mussels", emoji: "🐚", nutrition: { carbs: 4, protein: 12, fiber: 0 } },
        { name: "crab", emoji: "🦀", nutrition: { carbs: 0, protein: 17, fiber: 0 } }
    ],
    vegetables: [
        { name: "malunggay (moringa)", emoji: "🌿", nutrition: { carbs: 3, protein: 2, fiber: 2 } },
        { name: "kangkong (water spinach)", emoji: "🥬", nutrition: { carbs: 2, protein: 2, fiber: 2 } },
        { name: "ampalaya (bitter gourd)", emoji: "🥒", nutrition: { carbs: 3, protein: 1, fiber: 2 } },
        { name: "okra", emoji: "🌱", nutrition: { carbs: 4, protein: 2, fiber: 2 } },
        { name: "eggplant", emoji: "🍆", nutrition: { carbs: 3, protein: 1, fiber: 3 } },
        { name: "string beans", emoji: "🌱", nutrition: { carbs: 4, protein: 2, fiber: 2 } },
        { name: "squash", emoji: "🎃", nutrition: { carbs: 5, protein: 1, fiber: 1 } },
        { name: "tomatoes", emoji: "🍅", nutrition: { carbs: 3, protein: 1, fiber: 1 } },
        { name: "bell peppers", emoji: "🫑", nutrition: { carbs: 3, protein: 1, fiber: 1 } },
        { name: "cauliflower", emoji: "🥦", nutrition: { carbs: 3, protein: 2, fiber: 2 } },
        { name: "cabbage", emoji: "🥬", nutrition: { carbs: 3, protein: 1, fiber: 2 } },
        { name: "radish", emoji: "🥗", nutrition: { carbs: 2, protein: 1, fiber: 1 } },
        { name: "cucumber", emoji: "🥒", nutrition: { carbs: 2, protein: 1, fiber: 1 } },
        { name: "talbos ng kamote (sweet potato leaves)", emoji: "🌿", nutrition: { carbs: 3, protein: 2, fiber: 3 } },
        { name: "alugbati (Malabar spinach)", emoji: "🌿", nutrition: { carbs: 2, protein: 2, fiber: 2 } },
        { name: "saluyot (jute leaves)", emoji: "🌿", nutrition: { carbs: 2, protein: 2, fiber: 3 } },
        { name: "sigarilyas (winged beans)", emoji: "🌱", nutrition: { carbs: 4, protein: 2, fiber: 2 } },
        { name: "patola (sponge gourd)", emoji: "🥒", nutrition: { carbs: 2, protein: 1, fiber: 2 } },
        { name: "upo (bottle gourd)", emoji: "🥒", nutrition: { carbs: 2, protein: 1, fiber: 1 } },
        { name: "sayote (chayote)", emoji: "🥗", nutrition: { carbs: 3, protein: 1, fiber: 2 } }
    ],
    spices: [
        { name: "garlic", emoji: "🧄", nutrition: { carbs: 1, protein: 0, fiber: 0 } },
        { name: "onions", emoji: "🧅", nutrition: { carbs: 2, protein: 0, fiber: 0 } },
        { name: "ginger", emoji: "🌱", nutrition: { carbs: 1, protein: 0, fiber: 0 } },
        { name: "lemongrass", emoji: "🌿", nutrition: { carbs: 0, protein: 0, fiber: 0 } },
        { name: "bay leaves", emoji: "🌿", nutrition: { carbs: 0, protein: 0, fiber: 0 } },
        { name: "peppercorns", emoji: "🌶️", nutrition: { carbs: 0, protein: 0, fiber: 0 } },
        { name: "chili", emoji: "🌶️", nutrition: { carbs: 1, protein: 0, fiber: 0 } },
        { name: "calamansi", emoji: "🍋", nutrition: { carbs: 1, protein: 0, fiber: 0 } },
        { name: "turmeric", emoji: "🌱", nutrition: { carbs: 0, protein: 0, fiber: 0 } },
        { name: "annatto seeds", emoji: "🌱", nutrition: { carbs: 0, protein: 0, fiber: 0 } }
    ],
    cooking_methods: [
        "sinigang", "nilaga", "adobo", "ginisa", "inihaw", "torta", "paksiw", "kinilaw", 
        "ginataan", "pinakbet", "sarsiadong", "binagoongan", "ensaladang", "tinola", 
        "dinuguan", "bistek", "pinangat", "escabeche", "kilawin", "tapa"
    ],
    low_carb_sides: [
        { name: "cauliflower rice", emoji: "🥣", nutrition: { carbs: 3, protein: 2, fiber: 2 } },
        { name: "shirataki noodles", emoji: "🍜", nutrition: { carbs: 1, protein: 0, fiber: 2 } },
        { name: "zucchini noodles", emoji: "🥗", nutrition: { carbs: 3, protein: 1, fiber: 1 } },
        { name: "cabbage slaw", emoji: "🥬", nutrition: { carbs: 3, protein: 1, fiber: 2 } },
        { name: "cucumber salad", emoji: "🥒", nutrition: { carbs: 2, protein: 1, fiber: 1 } },
        { name: "eggplant salad", emoji: "🍆", nutrition: { carbs: 3, protein: 1, fiber: 3 } },
        { name: "coconut flour pancakes", emoji: "🥞", nutrition: { carbs: 4, protein: 4, fiber: 3 } },
        { name: "almond flour bread", emoji: "🍞", nutrition: { carbs: 3, protein: 5, fiber: 3 } }
    ]
};

// Function to generate additional meal variations
function generateMealVariations() {
    const generatedMeals = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: []
    };
    
    // Generate breakfast variations
    for (let i = 0; i < 250; i++) {
        // Random protein
        const protein = filipinoIngredients.proteins[Math.floor(Math.random() * filipinoIngredients.proteins.length)];
        // Random vegetable
        const vegetable = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
        // Random cooking method
        const cookingMethod = filipinoIngredients.cooking_methods[Math.floor(Math.random() * filipinoIngredients.cooking_methods.length)];
        
        // Calculate nutrition
        const carbs = protein.nutrition.carbs + vegetable.nutrition.carbs + Math.floor(Math.random() * 3);
        const proteinValue = protein.nutrition.protein + vegetable.nutrition.protein;
        const fiber = protein.nutrition.fiber + vegetable.nutrition.fiber;
        
        // Create meal name
        let mealName;
        if (Math.random() > 0.5) {
            mealName = `${cookingMethod} ${protein.name} with ${vegetable.name}`;
        } else {
            mealName = `${protein.name} and ${vegetable.name} ${cookingMethod}`;
        }
        
        // Create meal
        generatedMeals.breakfast.push({
            name: capitalizeFirstLetter(mealName),
            emoji: protein.emoji,
            items: [`${protein.name}`, `${vegetable.name}`, "spices and seasonings"],
            nutrition: { carbs: carbs, protein: proteinValue, fiber: fiber }
        });
    }
    
    // Generate lunch variations
    for (let i = 0; i < 250; i++) {
        // Random protein
        const protein = filipinoIngredients.proteins[Math.floor(Math.random() * filipinoIngredients.proteins.length)];
        // Random vegetables (2)
        const vegetable1 = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
        const vegetable2 = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
        // Random cooking method
        const cookingMethod = filipinoIngredients.cooking_methods[Math.floor(Math.random() * filipinoIngredients.cooking_methods.length)];
        // Random side
        const side = filipinoIngredients.low_carb_sides[Math.floor(Math.random() * filipinoIngredients.low_carb_sides.length)];
        
        // Calculate nutrition
        const carbs = protein.nutrition.carbs + vegetable1.nutrition.carbs + vegetable2.nutrition.carbs + side.nutrition.carbs;
        const proteinValue = protein.nutrition.protein + vegetable1.nutrition.protein + vegetable2.nutrition.protein + side.nutrition.protein;
        const fiber = protein.nutrition.fiber + vegetable1.nutrition.fiber + vegetable2.nutrition.fiber + side.nutrition.fiber;
        
        // Create meal name
        let mealName = `${cookingMethod} ${protein.name} with ${vegetable1.name} and ${side.name}`;
        
        // Create meal
        generatedMeals.lunch.push({
            name: capitalizeFirstLetter(mealName),
            emoji: protein.emoji,
            items: [`${protein.name}`, `${vegetable1.name}`, `${vegetable2.name}`, `${side.name}`],
            nutrition: { carbs: carbs, protein: proteinValue, fiber: fiber }
        });
    }
    
    // Generate dinner variations
    for (let i = 0; i < 250; i++) {
        // Random protein
        const protein = filipinoIngredients.proteins[Math.floor(Math.random() * filipinoIngredients.proteins.length)];
        // Random vegetables (1-3)
        const vegCount = Math.floor(Math.random() * 3) + 1;
        const vegetables = [];
        let vegCarbs = 0, vegProtein = 0, vegFiber = 0;
        
        for (let j = 0; j < vegCount; j++) {
            const veg = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
            vegetables.push(veg.name);
            vegCarbs += veg.nutrition.carbs;
            vegProtein += veg.nutrition.protein;
            vegFiber += veg.nutrition.fiber;
        }
        
        // Random cooking method
        const cookingMethod = filipinoIngredients.cooking_methods[Math.floor(Math.random() * filipinoIngredients.cooking_methods.length)];
        
        // Calculate nutrition
        const carbs = protein.nutrition.carbs + vegCarbs;
        const proteinValue = protein.nutrition.protein + vegProtein;
        const fiber = protein.nutrition.fiber + vegFiber;
        
        // Create meal name
        let mealName = `${cookingMethod} ${protein.name} with ${vegetables.join(" and ")}`;
        
        // Create meal
        generatedMeals.dinner.push({
            name: capitalizeFirstLetter(mealName),
            emoji: protein.emoji,
            items: [`${protein.name}`, ...vegetables, "spices and seasonings"],
            nutrition: { carbs: carbs, protein: proteinValue, fiber: fiber }
        });
    }
    
    // Generate snack variations
    for (let i = 0; i < 250; i++) {
        // Random vegetable or protein for snack
        const useProtein = Math.random() > 0.7;
        let mainIngredient, otherIngredient;
        
        if (useProtein) {
            mainIngredient = filipinoIngredients.proteins[Math.floor(Math.random() * filipinoIngredients.proteins.length)];
            otherIngredient = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
        } else {
            mainIngredient = filipinoIngredients.vegetables[Math.floor(Math.random() * filipinoIngredients.vegetables.length)];
            otherIngredient = filipinoIngredients.spices[Math.floor(Math.random() * filipinoIngredients.spices.length)];
        }
        
        // Calculate nutrition (snacks have smaller portions)
        const carbs = Math.floor((mainIngredient.nutrition.carbs + otherIngredient.nutrition.carbs) * 0.5);
        const proteinValue = Math.floor((mainIngredient.nutrition.protein + otherIngredient.nutrition.protein) * 0.5);
        const fiber = Math.floor((mainIngredient.nutrition.fiber + otherIngredient.nutrition.fiber) * 0.5);
        
        // Create snack name
        let snackName;
        if (useProtein) {
            snackName = `Small portion of ${mainIngredient.name} with ${otherIngredient.name}`;
        } else {
            snackName = `${mainIngredient.name} with ${otherIngredient.name}`;
        }
        
        // Create snack
        generatedMeals.snacks.push({
            name: capitalizeFirstLetter(snackName),
            emoji: mainIngredient.emoji,
            items: [`${mainIngredient.name}`, `${otherIngredient.name}`],
            nutrition: { carbs: carbs, protein: proteinValue, fiber: fiber }
        });
    }
    
    return generatedMeals;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize additional meals
let additionalMeals = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Setup filter buttons
    setupFilterButtons();
    
    // Generate meal plan button
    document.getElementById('generate-btn').addEventListener('click', function() {
        // Generate additional meals if not already done
        if (!additionalMeals) {
            console.log("Generating additional meals...");
            additionalMeals = generateMealVariations();
            
            // Add generated meals to the meal plan data
            for (const mealType in additionalMeals) {
                mealPlanData[mealType] = [...mealPlanData[mealType], ...additionalMeals[mealType]];
            }
            console.log(`Total meals: Breakfast: ${mealPlanData.breakfast.length}, Lunch: ${mealPlanData.lunch.length}, Dinner: ${mealPlanData.dinner.length}, Snacks: ${mealPlanData.snacks.length}`);
        }
        
        generateMealPlan();
    });
    
    // Print button
    document.getElementById('print-btn').addEventListener('click', printMealPlan);
    
    // Export button
    document.getElementById('export-btn').addEventListener('click', exportToPDF);
    
    // Theme switch
    document.getElementById('theme-switch').addEventListener('change', toggleTheme);
    
    // Generate initial meal plan
    generateMealPlan();
});

// Theme functions
function initTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-switch').checked = true;
    }
}

function toggleTheme() {
    if (document.getElementById('theme-switch').checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Filter functions
function setupFilterButtons() {
    // Protein filter buttons
    const proteinButtons = document.querySelectorAll('[data-protein]');
    proteinButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all protein buttons
            proteinButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Generate new meal plan with selected filter
            generateMealPlan();
        });
    });
    
    // Carb filter buttons
    const carbButtons = document.querySelectorAll('[data-carb]');
    carbButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all carb buttons
            carbButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Generate new meal plan with selected filter
            generateMealPlan();
        });
    });
}

// Get the selected filters
function getSelectedFilters() {
    const proteinFilter = document.querySelector('[data-protein].active').getAttribute('data-protein');
    const carbFilter = document.querySelector('[data-carb].active').getAttribute('data-carb');
    
    return { proteinFilter, carbFilter };
}

// Generate meal plan
function generateMealPlan() {
    const { proteinFilter, carbFilter } = getSelectedFilters();
    const mealPlanElement = document.getElementById('meal-plan');
    mealPlanElement.innerHTML = '';
    
    // Track used meals to avoid repeats
    const usedMeals = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: []
    };
    
    // Track nutritional totals
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFiber = 0;
    let dayCount = 0;
    
    // Generate 7-day meal plan
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    days.forEach(day => {
        dayCount++;
        
        // Create day card
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        // Create day header
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        dayCard.appendChild(dayHeader);
        
        // Create day content
        const dayContent = document.createElement('div');
        dayContent.className = 'day-content';
        
        // Daily nutritional values
        let dailyCarbs = 0;
        let dailyProtein = 0;
        let dailyFiber = 0;
        
        // Create meal cards grid
        const mealCardsGrid = document.createElement('div');
        mealCardsGrid.className = 'meal-cards-grid';
        
        // Add meals for the day
        const mealTypes = ['breakfast', 'lunch', 'dinner', 'snacks'];
        const mealIcons = {
            'breakfast': '🍳',
            'lunch': '🍲',
            'dinner': '🍽️',
            'snacks': '🥜'
        };
        
        mealTypes.forEach(mealType => {
            // Get random meal of this type
            const meal = getRandomMeal(mealType, usedMeals[mealType], proteinFilter, carbFilter);
            usedMeals[mealType].push(meal.name);
            
            // Create meal card
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';
            
            // Create meal card header
            const mealCardHeader = document.createElement('div');
            mealCardHeader.className = 'meal-card-header';
            mealCardHeader.innerHTML = `<i class="fas ${getMealTypeIcon(mealType)}"></i> ${capitalizeFirstLetter(mealType)}`;
            mealCard.appendChild(mealCardHeader);
            
            // Create meal card content
            const mealCardContent = document.createElement('div');
            mealCardContent.className = 'meal-card-content';
            
            // Create meal title
            const mealTitle = document.createElement('div');
            mealTitle.className = 'meal-title';
            
            // Create emoji container
            const emojiContainer = document.createElement('div');
            emojiContainer.className = 'meal-emoji-container';
            emojiContainer.textContent = meal.emoji || mealIcons[mealType];
            
            mealTitle.appendChild(emojiContainer);
            mealTitle.appendChild(document.createTextNode(meal.name));
            mealCardContent.appendChild(mealTitle);
            
            // Create meal ingredients
            const mealIngredients = document.createElement('div');
            mealIngredients.className = 'meal-ingredients';
            mealIngredients.textContent = meal.items.join(', ');
            mealCardContent.appendChild(mealIngredients);
            
            // Create meal nutrition stats
            const mealNutritionStats = document.createElement('div');
            mealNutritionStats.className = 'meal-nutrition-stats';
            
            // Create carb stat
            const carbStat = document.createElement('div');
            carbStat.className = 'nutrition-stat';
            
            const carbValue = document.createElement('div');
            carbValue.className = 'nutrition-value';
            carbValue.textContent = meal.nutrition.carbs;
            carbStat.appendChild(carbValue);
            
            const carbLabel = document.createElement('div');
            carbLabel.className = 'nutrition-label';
            carbLabel.textContent = 'Carbs (g)';
            carbStat.appendChild(carbLabel);
            
            mealNutritionStats.appendChild(carbStat);
            
            // Create protein stat
            const proteinStat = document.createElement('div');
            proteinStat.className = 'nutrition-stat';
            
            const proteinValue = document.createElement('div');
            proteinValue.className = 'nutrition-value';
            proteinValue.textContent = meal.nutrition.protein;
            proteinStat.appendChild(proteinValue);
            
            const proteinLabel = document.createElement('div');
            proteinLabel.className = 'nutrition-label';
            proteinLabel.textContent = 'Protein (g)';
            proteinStat.appendChild(proteinLabel);
            
            mealNutritionStats.appendChild(proteinStat);
            
            // Create fiber stat
            const fiberStat = document.createElement('div');
            fiberStat.className = 'nutrition-stat';
            
            const fiberValue = document.createElement('div');
            fiberValue.className = 'nutrition-value';
            fiberValue.textContent = meal.nutrition.fiber;
            fiberStat.appendChild(fiberValue);
            
            const fiberLabel = document.createElement('div');
            fiberLabel.className = 'nutrition-label';
            fiberLabel.textContent = 'Fiber (g)';
            fiberStat.appendChild(fiberLabel);
            
            mealNutritionStats.appendChild(fiberStat);
            
            mealCardContent.appendChild(mealNutritionStats);
            mealCard.appendChild(mealCardContent);
            
            // Add meal card to grid
            mealCardsGrid.appendChild(mealCard);
            
            // Add to daily nutrition totals
            dailyCarbs += meal.nutrition.carbs;
            dailyProtein += meal.nutrition.protein;
            dailyFiber += meal.nutrition.fiber;
        });
        
        // Add meal cards grid to day content
        dayContent.appendChild(mealCardsGrid);
        
        // Add daily nutrition summary to day header
        const nutritionSummary = document.createElement('div');
        nutritionSummary.className = 'nutrition-summary';
        nutritionSummary.textContent = `${Math.round(dailyCarbs)}g carbs · ${Math.round(dailyProtein)}g protein · ${Math.round(dailyFiber)}g fiber`;
        dayHeader.appendChild(nutritionSummary);
        
        // Add day content to day card
        dayCard.appendChild(dayContent);
        
        // Add day card to meal plan
        mealPlanElement.appendChild(dayCard);
        
        // Add to weekly totals
        totalCarbs += dailyCarbs;
        totalProtein += dailyProtein;
        totalFiber += dailyFiber;
    });
    
    // Update average nutrition stats
    document.getElementById('avg-carbs').textContent = `${Math.round(totalCarbs / 7)}g`;
    document.getElementById('avg-protein').textContent = `${Math.round(totalProtein / 7)}g`;
    document.getElementById('avg-fiber').textContent = `${Math.round(totalFiber / 7)}g`;
}

// Helper function to get appropriate icon for meal type
function getMealTypeIcon(mealType) {
    switch(mealType) {
        case 'breakfast': return 'fa-coffee';
        case 'lunch': return 'fa-utensils';
        case 'dinner': return 'fa-moon';
        case 'snacks': return 'fa-apple-alt';
        default: return 'fa-utensils';
    }
}

// Get random meal of specified type with filters
function getRandomMeal(mealType, usedMeals, proteinFilter, carbFilter) {
    let filteredMeals = mealPlanData[mealType];
    
    // Apply protein filter
    if (proteinFilter !== 'all') {
        filteredMeals = filteredMeals.filter(meal => {
            // Check if meal contains the protein type
            if (proteinFilter === 'vegetarian') {
                return meal.vegetarian === true;
            } else {
                return meal.protein === proteinFilter;
            }
        });
    }
    
    // Apply carb filter
    if (carbFilter !== 'all') {
        filteredMeals = filteredMeals.filter(meal => {
            switch(carbFilter) {
                case 'very-low': return meal.nutrition.carbs <= 5;
                case 'low': return meal.nutrition.carbs > 5 && meal.nutrition.carbs <= 10;
                case 'moderate': return meal.nutrition.carbs > 10 && meal.nutrition.carbs <= 15;
                default: return true;
            }
        });
    }
    
    // If no meals match filters, use all meals of this type
    if (filteredMeals.length === 0) {
        filteredMeals = mealPlanData[mealType];
    }
    
    // Filter out recently used meals if possible
    let availableMeals = filteredMeals.filter(meal => !usedMeals.includes(meal.name));
    
    // If all meals have been used, reset and use all meals
    if (availableMeals.length === 0) {
        availableMeals = filteredMeals;
    }
    
    // Get random meal from available meals
    const randomIndex = Math.floor(Math.random() * availableMeals.length);
    return availableMeals[randomIndex];
}

// Print meal plan
function printMealPlan() {
    window.print();
}

// Export to PDF
function exportToPDF() {
    alert('PDF export functionality coming soon!');
    // Future implementation using jsPDF or similar library
}
