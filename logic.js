// test git
var exercises = [
	{
		longName: 'Regular Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/general-pushup',
		video: 'http://content.jwplatform.com/players/CqnAcLB5-EPvWYbKj.html'
	},
	{
		longName: 'Incline Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/incline-pushup',
		video: 'http://content.jwplatform.com/players/j7OWLYsh-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/swiss-ball-pushup',
		video: 'http://content.jwplatform.com/players/4EjQ9hmA-EPvWYbKj.html'
	},
	{
		longName: 'Bosu Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bosu' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/bosu-ball-pushup',
		video: 'http://content.jwplatform.com/players/PjaHHLl0-EPvWYbKj.html'
	},
	{
		longName: 'Med Ball Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/medicine-ball-pushup',
		video: 'http://content.jwplatform.com/players/uoVaOG0U-JGzcmSrv.html'
	},
	{
		longName: 'Wide Hands Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/wide-hands-pushup',
		video: 'http://content.jwplatform.com/players/mBEQioYg-EPvWYbKj.html'
	},
	{
		longName: 'Close Hands Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/close-hands-pushup',
		video: 'http://content.jwplatform.com/players/H43AMNZu-JGzcmSrv.html'
	},
	{
		longName: 'Triple-Stop Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/triple-stop-pushup',
		video: 'http://content.jwplatform.com/players/dmErtmqR-EPvWYbKj.html'
	},
	{
		longName: 'Explosive Pushup',
		shortName: 'Pushup',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/explosive-pushup',
		video: 'http://content.jwplatform.com/players/AX2bpre3-EPvWYbKj.html'
	},
	{
		longName: 'Dip',
		shortName: 'Dip',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/bodyweight-dip',
		video: 'http://content.jwplatform.com/players/JPQ9RRYD-EPvWYbKj.html'
	},
	{
		longName: 'Suspended Dip',
		shortName: 'Dip',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/suspended-dip',
		video: 'http://content.jwplatform.com/players/57SbIl2u-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Bench Press',
		shortName: 'Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/barbell-bench-press',
		video: 'http://content.jwplatform.com/players/1XiT7flh-E1EucFxD.html'
	},
	{
		longName: 'Incline Barbell Bench Press',
		shortName: 'Incline Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/incline-barbell-bench-press',
		video: 'http://content.jwplatform.com/players/ZolJsnGq-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Bench Press',
		shortName: 'Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/dumbbell-bench-press',
		video: 'http://content.jwplatform.com/players/WmSpAzb2-E1EucFxD.html'
	},
	{
		longName: 'Alternating Dumbbell Bench Press',
		shortName: 'Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/alternating-dumbbell-bench-press',
		video: 'http://content.jwplatform.com/players/DIZcegYq-EPvWYbKj.html'
	},
	{
		longName: 'Neutral Grip Dumbbell Bench Press',
		shortName: 'Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/neutral-grip-dumbbell-bench-press',
		video: 'http://content.jwplatform.com/players/jEc9mFP5-EPvWYbKj.html'
	},
	{
		longName: 'Incline Dumbbell Bench Press',
		shortName: 'Incline Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/incline-dumbbell-bench-press',
		video: 'http://content.jwplatform.com/players/L09UxtMO-EPvWYbKj.html'
	},
	{
		longName: 'Swiss-Ball Dumbbell Chest Press',
		shortName: 'Bench',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell', 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/swiss-ball-dumbbell-chest-press',
		video: 'http://content.jwplatform.com/players/AJQYuw7Y-EPvWYbKj.html'
	},
	{
		longName: 'Single-Arm Cable Chest Press',
		shortName: 'Cable Chest Press',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/single-arm-cable-chest-press',
		video: 'http://content.jwplatform.com/players/bDKnAPZm-EPvWYbKj.html'
	},
	{
		longName: 'Medicine Ball Chest Pass',
		shortName: 'Med Ball Chest Pass',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/medicine-ball-chest-pass',
		video: 'http://content.jwplatform.com/players/Mce4fPRy-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Fly',
		shortName: 'Fly',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/dumbbell-flye',
		video: 'http://content.jwplatform.com/players/0vl9GeH4-E1EucFxD.html'
	},
	{
		longName: 'Standing Cable Fly',
		shortName: 'Fly',
		primaryMuscleGroup: 'Chest',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandstrength.com/exercises/cable-crossovers-(mid-chest).html',
		video: 'https://www.youtube.com/watch?time_continue=1&v=OPYrUGZL8nU'
	},
	{
		longName: 'Inverted Row',
		shortName: 'Inverted Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/inverted-row',
		video: 'http://content.jwplatform.com/players/2TeGPo0C-JGzcmSrv.html'
	},
	{
		longName: 'Barbell Row',
		shortName: 'Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/videos/barbell-bent-over-row',
		video: 'http://content.jwplatform.com/players/OQtl2GWP-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Row',
		shortName: 'Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/dumbbell-row',
		video: 'http://content.jwplatform.com/players/Diy8nWpE-EPvWYbKj.html'
	},
	{
		longName: 'Neutral Grip Dumbbell Row',
		shortName: 'Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/single-arm-neutral-grip-dumbbell-row',
		video: 'http://content.jwplatform.com/players/Ayt9XjoI-EPvWYbKj.html'
	},
	{
		longName: 'Reverse Grip Bentover Row',
		shortName: 'Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/reverse-grip-barbell-row',
		video: 'http://content.jwplatform.com/players/05xp0Zgu-E1EucFxD.html'
	},
	{
		longName: 'Bent-Over Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell', 'Cable' ],
		note: 'Bent Over Reverse Fly',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/bent-over-lateral-raise',
		video: '<http://content.jwplatform.com/players/UMPzTFtn-EPvWYbKj.html'
	},
	{
		longName: 'Seated Rear Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell', 'Cable' ],
		note: 'Bent Over Reverse Fly',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/seated-rear-lateral-raise',
		video: '<http://content.jwplatform.com/players/UMPzTFtn-EPvWYbKj.html'
	},
	{
		longName: 'Underhand Grip Rear Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/underhand-grip-rear-lateral-raise',
		video: 'http://content.jwplatform.com/players/adqBTzbX-EPvWYbKj.html'
	},
	{
		longName: 'Overhand Grip Rear Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/overhand-grip-rear-lateral-raise',
		video: 'http://content.jwplatform.com/players/tEmSdMA6-EPvWYbKj.html'
	},
	// {
	// 	longName: 'Crossover Rear Lateral Raise',
	// 	shortName: 'Lateral Raise',
	// 	primaryMuscleGroup: 'Back',
	// 	generalMuscleGroup: 'Upper Body',
	// 	equipment: [ 'Dumbbell' ]
	// },
	{
		longName: 'Y Raise',
		shortName: 'Raises',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'TRX' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/floor-y-raise',
		video: 'http://content.jwplatform.com/players/mHM8hmvs-EPvWYbKj.html'
	},
	{
		longName: 'T Raise',
		shortName: 'Raises',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'TRX' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/floor-t-raise',
		video: 'http://content.jwplatform.com/players/xOxCqKTY-EPvWYbKj.html'
	},
	{
		longName: 'Cable Row',
		shortName: 'Seated Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/seated-cable-row',
		video: 'http://content.jwplatform.com/players/BUmz6oTd-EPvWYbKj.html'
	},
	{
		longName: 'Wide Grip Cable Row',
		shortName: 'Seated Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/wide-grip-seated-cable-row',
		video: 'http://content.jwplatform.com/players/MEZ1OgRF-EPvWYbKj.html'
	},
	{
		longName: 'Underhand Grip Cable Row',
		shortName: 'Seated Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/underhand-grip-cable-row',
		video: 'http://content.jwplatform.com/players/UhsYPhzx-EPvWYbKj.html'
	},
	{
		longName: 'Single-Arm Cable Row',
		shortName: 'Seated Row',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/single-arm-cable-row',
		video: 'http://content.jwplatform.com/players/we5SkPVe-E1EucFxD.html'
	},
	{
		longName: 'Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/general-pullup',
		video: 'http://content.jwplatform.com/players/tX5CVI1B-EPvWYbKj.html'
	},
	{
		longName: 'Wide-Grip Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/wide-grip-pullup',
		video: 'http://content.jwplatform.com/players/nCIrvULM-JGzcmSrv.html'
	},
	{
		longName: 'Neutral-Grip Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/neutral-grip-pullup',
		video: '<http://content.jwplatform.com/players/VXvQ6fZy-EPvWYbKj.html'
	},
	{
		longName: 'Towel Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/towel-pullup',
		video: 'http://content.jwplatform.com/players/EgP6Y8Ck-EPvWYbKj.html'
	},
	{
		longName: 'Mixed-Grip Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/mixed-grip-pullup',
		video: 'http://content.jwplatform.com/players/0pooMZPL-EPvWYbKj.html'
	},
	{
		longName: 'Negative Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.bodybuilding.com/exercises/negative-pull-up',
		video: 'https://www.youtube.com/embed/gbPURTSxQLY'
	},
	{
		longName: 'Weighted Pullup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/weighted-pullup',
		video: 'http://content.jwplatform.com/players/WodBx63P-JGzcmSrv.html'
	},
	{
		longName: 'Scapular Retraction',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		note: 'On Pullup Bar',
		site: 'https://www.exercise.com/exercises/hanging-scapular-retraction',
		video: 'https://www.youtube.com/embed/uPVRwyEiAd8'
	},
	{
		longName: 'Chinup',
		shortName: 'Chinup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/chinup',
		video: 'http://content.jwplatform.com/players/v3q0Kh7K-JGzcmSrv.html'
	},
	{
		longName: 'Close-Grip Chinup',
		shortName: 'Pullup',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/close-grip-chinup',
		video: 'http://content.jwplatform.com/players/zAAuKlfW-EPvWYbKj.html'
	},
	{
		longName: 'Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/lat-pulldown',
		video: 'http://content.jwplatform.com/players/SPgUdjAQ-E1EucFxD.html'
	},
	{
		longName: 'Wide-Grip Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/wide-grip-lat-pulldown',
		video: 'http://content.jwplatform.com/players/jobrPv2N-JGzcmSrv.html'
	},
	{
		longName: 'Underhand-Grip Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ]
	},
	{
		longName: 'Close-Grip Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/close-grip-lat-pulldown',
		video: 'http://content.jwplatform.com/players/QpcNToDi-EPvWYbKj.html'
	},
	{
		longName: 'Kneeling Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/kneeling-lat-pulldown',
		video: 'http://content.jwplatform.com/players/PnQoqplt-EPvWYbKj.html'
	},
	{
		longName: '30-Degree Lat Pulldown',
		shortName: 'Lat Pulldown',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Machine' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/30-degree-lat-pulldown',
		video: 'http://content.jwplatform.com/players/fPi9l8Er-EPvWYbKj.html'
	},
	{
		longName: 'EZ-Bar Pullover',
		shortName: 'Pullover',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/ez-bar-pullover',
		video: 'http://content.jwplatform.com/players/tOpHC9pg-JGzcmSrv.html'
	},
	{
		longName: 'Dumbbell Pullover',
		shortName: 'Pullover',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/lying-dumbbell-pullover-extension',
		video: 'http://content.jwplatform.com/players/uWEvK1Nu-EPvWYbKj.html'
	},
	{
		longName: 'Standing Cable Pullover',
		shortName: 'Pullover',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/standing-cable-pullover',
		video: 'http://content.jwplatform.com/players/7w5krKkm-EPvWYbKj.html'
	},
	{
		longName: 'Cable Face Pull',
		shortName: 'Face Pull',
		primaryMuscleGroup: 'Back',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/face-pull',
		video: 'http://content.jwplatform.com/players/GtNoOdXR-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/barbell-shoulder-press',
		video: 'http://content.jwplatform.com/players/ZBqSVgnc-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Push Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-push-press',
		video: 'http://content.jwplatform.com/players/hnUH9JAE-JGzcmSrv.html'
	},
	{
		longName: 'Neutral-Grip Dumbbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Neutral Grip',
		site:
			'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/neutral-grip-dumbbell-shoulder-press',
		video: 'https://www.youtube.com/embed/LED1bhzkfLU'
	},
	{
		longName: 'Seated Dumbbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/seated-dumbbell-shoulder-press',
		video: 'http://content.jwplatform.com/players/ZInrVije-EPvWYbKj.html'
	},
	{
		longName: 'Palms-Forward Dumbbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/dumbbell-shoulder-press',
		video: 'http://content.jwplatform.com/players/D5AQKnGl-E1EucFxD.html'
	},
	{
		longName: 'Alternating Dumbbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/alternating-dumbbell-shoulder-press',
		video: 'http://content.jwplatform.com/players/UC6tTPzk-EPvWYbKj.html'
	},
	{
		longName: 'Single-Arm Dumbbell Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/single-arm-dumbbell-shoulder-press',
		video: 'http://content.jwplatform.com/players/AB7KYJgv-JGzcmSrv.html'
	},
	{
		longName: 'Floor Inverted Shoulder Press',
		shortName: 'Press',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Bodyweight' ],
		note: 'Pushup but raise hips so that torso is perpendicular to floor',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/floor-inverted-shoulder-press',
		video: 'http://content.jwplatform.com/players/F4EDAENf-EPvWYbKj.html'
	},
	{
		longName: 'Neutral-Grip Front Raise',
		shortName: 'Front Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.ilovefitness.com/index.php/component/exercise/?view=exercise&exercise_id=80&merchant_id=1',
		video: 'https://www.youtube.com/embed/ew2twBXJ46w'
	},
	{
		longName: 'Overhand-Grip Front Raise',
		shortName: 'Front Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/dumbbell-front-raise',
		video: 'http://content.jwplatform.com/players/VEnypfNW-E1EucFxD.html'
	},
	{
		longName: 'Weight-Plate Front Raise',
		shortName: 'Front Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/weight-plate-front-raise',
		video: 'http://content.jwplatform.com/players/gE3vzWHg-EPvWYbKj.html'
	},
	{
		longName: 'Palms-Forward Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/dumbbell-lateral-raise',
		video: 'https://www.youtube.com/embed/MycxyTI8E'
	},
	{
		longName: 'Lateral Raise',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/dumbbell-lateral-raise',
		video: 'http://content.jwplatform.com/players/OYG3puq2-E1EucFxD.html'
	},
	{
		longName: 'Alternating Lateral Raise with Static Hold',
		shortName: 'Lateral Raise',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site:
			'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/alternating-lateral-raise-static-hold',
		video: 'http://content.jwplatform.com/players/s9oFYmUQ-EPvWYbKj.html'
	},
	{
		longName: 'L Raise',
		shortName: 'Raises',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/standing-l-raise',
		video: 'http://content.jwplatform.com/players/aAOygZ0x-EPvWYbKj.html'
	},
	{
		longName: 'W Raise',
		shortName: 'Raises',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'TRX' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/incline-w-raise',
		video: 'http://content.jwplatform.com/players/PgEx7FZp-EPvWYbKj.html'
	},
	{
		longName: 'I Raise',
		shortName: 'Raises',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Upper Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'TRX' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/floor-i-raise',
		video: 'http://content.jwplatform.com/players/cNJq3PrQ-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/barbell-shrug',
		video: 'http://content.jwplatform.com/players/8GZnJmW1-EPvWYbKj.html'
	},
	{
		longName: 'Wide-Grip Barbell Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/wide-grip-barbell-shrug',
		video: 'http://content.jwplatform.com/players/2Zk7dqpB-EPvWYbKj.html'
	},
	{
		longName: 'Overhead Barbell Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/overhead-barbell-shrug',
		video: 'http://content.jwplatform.com/players/4gT6eQWV-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Neutral Grip',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/dumbbell-shrug',
		video: 'http://content.jwplatform.com/players/2ibNMmQk-E1EucFxD.html'
	},
	{
		longName: 'Overhead Dumbbell Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Palms facing out',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/overhead-dumbbell-shrug',
		video: 'http://content.jwplatform.com/players/oAwBhFXV-EPvWYbKj.html'
	},
	{
		longName: 'Serratus Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/serratus-shrug',
		video: 'http://content.jwplatform.com/players/XuJ5hUe9-EPvWYbKj.html'
	},
	{
		longName: 'Serratus Chair Shrug',
		shortName: 'Shrug',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/serratus-chair-shrug',
		video: 'http://content.jwplatform.com/players/0ZJE4I32-EPvWYbKj.html'
	},
	{
		longName: 'Seated Dumbbell External Rotations',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/seated-dumbbell-external-rotation',
		video: 'http://content.jwplatform.com/players/LUJ4sRb9-EPvWYbKj.html'
	},
	{
		longName: 'Lying External Rotations',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/lying-external-rotation',
		video: 'http://content.jwplatform.com/players/5H15wTIx-EPvWYbKj.html'
	},
	{
		longName: 'Cable Diagonal Raise',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/cable-diagonal-raise',
		video: 'http://content.jwplatform.com/players/EZrAxrnJ-EPvWYbKj.html'
	},
	{
		longName: 'Cable External Rotation',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/cable-external-rotation',
		video: 'http://content.jwplatform.com/players/rKVtCNRI-EPvWYbKj.html'
	},
	{
		longName: '90-Degrees Cable External Rotation',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/90-degree-cable-external-rotation',
		video: 'http://content.jwplatform.com/players/m9cYgLCW-EPvWYbKj.html'
	},
	{
		longName: 'Cable Internal Rotation',
		shortName: 'Rotations',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.bodybuilding.com/exercises/cable-internal-rotation',
		video: 'https://www.youtube.com/embed/RpDuA5rUByk'
	},
	{
		longName: 'Sleeper Stretch',
		shortName: 'Shoulder Stretch',
		primaryMuscleGroup: 'Shoulders',
		generalMuscleGroup: 'Stretch',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/sleeper-stretch',
		video: 'http://content.jwplatform.com/players/Xio23mXb-EPvWYbKj.html'
	},
	{
		longName: 'EZ-Bar or Barbell Curl',
		shortName: 'Barbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ]
	},
	{
		longName: 'Close-Grip EZ-Bar Curl',
		shortName: 'Barbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/ez-bar-curl',
		video: 'http://content.jwplatform.com/players/1ME4avzl-JGzcmSrv.html'
	},
	{
		longName: 'Wide-Grip EZ-Bar or Barbell Curl',
		shortName: 'Barbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/wide-grip-ez-bar-biceps-curl',
		video: 'http://content.jwplatform.com/players/8DH9LzdK-EPvWYbKj.html'
	},
	{
		longName: 'Reverse-Grip EZ-Bar or Barbell Curl',
		shortName: 'Barbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/reverse-ez-bar-curl',
		video: 'http://content.jwplatform.com/players/Iy7Wd8oS-EPvWYbKj.html'
	},
	{
		longName: 'EZ-Bar Preacher Curl',
		shortName: 'Barbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/ez-bar-preacher-curl',
		video: 'http://content.jwplatform.com/players/ZKP7PokC-EPvWYbKj.html'
	},
	{
		longName: 'Standing Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Standard Grip - Palms Facing Outward',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/standing-dumbbell-biceps-curl',
		video: 'http://content.jwplatform.com/players/AbxEeH1J-EPvWYbKj.html'
	},
	{
		longName: 'Standing Twisting Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Hammer grip at bottom twisting to standard grip at top',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/twisting-standing-dumbbell-biceps-curl',
		video: 'http://content.jwplatform.com/players/TF6uo7FG-EPvWYbKj.html'
	},
	{
		longName: 'Hammer Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/dumbbell-hammer-curl',
		video: 'http://content.jwplatform.com/players/mkyBVvCn-E1EucFxD.html'
	},
	{
		longName: 'Incline Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Offset Thumb Grip - palms forward, thumbs touch head of dumbbell',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/incline-dumbbell-biceps-curl',
		video: 'http://content.jwplatform.com/players/Vb5ftRwF-EPvWYbKj.html'
	},
	{
		longName: 'Decline Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Hammer Grip',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/decline-hammer-curl',
		video: 'http://content.jwplatform.com/players/GjXrJ8vt-EPvWYbKj.html'
	},
	{
		longName: 'Seated Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Reverse Grip - palms face behind you',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/seated-dumbbell-biceps-curl',
		video: 'http://content.jwplatform.com/players/2R2t3ZJS-JGzcmSrv.html'
	},
	{
		longName: 'Split-Stance Dumbbell Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Offset Pinky Grip - pinky fingers touch head of dumbbell',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/split-stance-offset-pinky-dumbbell-curl',
		video: 'http://content.jwplatform.com/players/rwYYmMJk-EPvWYbKj.html'
	},
	{
		longName: 'Standing Zottman Curl',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Standard Grip going up, switch to reverse grip on way down',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/standing-zottman-biceps-curl',
		video: 'http://content.jwplatform.com/players/MYkpuoEk-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Curl with Static Hold',
		shortName: 'Dumbbell Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/dumbbell-biceps-curl-static-hold',
		video: 'http://content.jwplatform.com/players/1pqCGDhC-EPvWYbKj.html'
	},
	{
		longName: 'Overhead Cable Curl',
		shortName: 'Cable Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.bodybuilding.com/exercises/overhead-cable-curl',
		video: 'https://www.youtube.com/embed/5_n3gVeGEqc'
	},
	{
		longName: 'Cable Curl with Bar Attachment',
		shortName: 'Cable Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/cable-biceps-curl',
		video: 'http://content.jwplatform.com/players/lvHm2FIt-JGzcmSrv.html'
	},
	{
		longName: 'Cable Hammer Curl with Tri-Rope Attachment',
		shortName: 'Cable Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/cable-hammer-curl',
		video: 'http://content.jwplatform.com/players/eGZ1b94b-E1EucFxD.html'
	},
	{
		longName: 'Close-Grip Chinup',
		shortName: 'Chinup',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/close-grip-chinup',
		video: 'http://content.jwplatform.com/players/zAAuKlfW-EPvWYbKj.html'
	},
	{
		longName: 'Cross-Body Hammer Curl',
		shortName: 'Unique Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/cross-body-dumbbell-hammer-curl',
		video: 'http://content.jwplatform.com/players/9q0dC2OC-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Wide Curl',
		shortName: 'Unique Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'Outer Arms Elbows At Hips Curls',
		site: 'https://www.popsugar.com/fitness/photo-gallery/40764325/image/40765015/Wide-Bicep-Curl',
		video: 'https://www.youtube.com/embed/hB_aZSSi7mA'
	},
	{
		longName: 'Hammer Curl to Overhead Press',
		shortName: 'Unique Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/hammer-curl-press',
		video: 'http://content.jwplatform.com/players/z55vT9qa-JGzcmSrv.html'
	},
	{
		longName: '90 Degree Hold Farmers Walk',
		shortName: 'Unique Curl',
		primaryMuscleGroup: 'Biceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell', 'Kettlebell' ],
		site: 'https://www.stack.com/a/farmers-walk-handles',
		video: 'https://www.youtube.com/embed/xTI_jqcRJR4'
	},
	{
		longName: 'EZ-Bar Lying Triceps Extension',
		shortName: 'Bar Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/lying-ez-bar-triceps-extension',
		video: 'http://content.jwplatform.com/players/37vVqHcX-EPvWYbKj.html'
	},
	{
		longName: 'Static EZ-Bar Lying Triceps Extension',
		shortName: 'Bar Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/static-lying-triceps-extension',
		video: 'http://content.jwplatform.com/players/V37ZhOtF-EPvWYbKj.html'
	},
	{
		longName: 'Triple-Stop Triceps Extension',
		shortName: 'Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.exercise.com/exercises/ez-bar-lying-triple-stop-tricep-extension',
		video: 'https://www.youtube.com/embed/cL1fP9bJK8c'
	},
	{
		longName: 'Dumbbell Lying Triceps Extension',
		shortName: 'Dumbbell Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/dumbbell-lying-triceps-extension',
		video: 'http://content.jwplatform.com/players/rcqFHyVi-EPvWYbKj.html'
	},
	{
		longName: 'Alternating Dumbbell Lying Triceps Extension',
		shortName: 'Dumbbell Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site:
			'https://www.muscleandfitness.com/workouts/arm-exercises/videos/alternating-dumbbell-lying-triceps-extension',
		video: 'http://content.jwplatform.com/players/WOZN0ibd-EPvWYbKj.html'
	},
	{
		longName: 'Overhead Dumbbell Triceps Extension',
		shortName: 'Dumbbell Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/overhead-dumbbell-triceps-extension',
		video: 'http://content.jwplatform.com/players/v6SnXNzc-EPvWYbKj.html'
	},
	{
		longName: 'Seated Dumbbell Overhead Triceps Extension',
		shortName: 'Dumbbell Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site:
			'https://www.muscleandfitness.com/workouts/arm-exercises/videos/seated-dumbbell-overhead-triceps-extension',
		video: 'http://content.jwplatform.com/players/n3eqMEsq-EPvWYbKj.html'
	},
	{
		longName: 'Cable Overhead Triceps Extension',
		shortName: 'Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandstrength.com/exercises/overhead-tricep-extension.html',
		video: 'https://www.youtube.com/embed/NRENeEgaIgA'
	},
	{
		longName: 'Cable Triceps Pressdown',
		shortName: 'Triceps Pressdown',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/triceps-pressdown',
		video: 'http://content.jwplatform.com/players/nqCTJFYf-JGzcmSrv.html'
	},
	{
		longName: 'Underhand-Grip Triceps Pressdown',
		shortName: 'Triceps Pressdown',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/reverse-grip-triceps-pressdown',
		video: 'http://content.jwplatform.com/players/tqz8RUHE-EPvWYbKj.html'
	},
	{
		longName: 'Rope Triceps Pressdown',
		shortName: 'Triceps Pressdown',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/rope-pressdown',
		video: 'http://content.jwplatform.com/players/aPDnyF0B-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Triceps Kickback',
		shortName: 'Triceps Extension',
		primaryMuscleGroup: 'Triceps',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/dumbbell-kickback',
		video: 'http://content.jwplatform.com/players/xgNcannV-E1EucFxD.html'
	},
	{
		longName: 'Wrist Curl',
		shortName: 'Wrist',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.bodybuilding.com/exercises/seated-dumbbell-palms-up-wrist-curl',
		video: 'http://content.jwplatform.com/players/h32vlhuU-E1EucFxD.html'
	},
	{
		longName: 'Wrist Extension',
		shortName: 'Wrist',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/wrist-extension-stretch',
		video: 'https://www.youtube.com/embed/ZQLMz8-KpgU'
	},
	{
		longName: 'Wide-Grip Bar Hold',
		shortName: 'Grip',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		note: 'hold a weighted barbell with a wide grip until failure',
		site: 'https://www.exercise.com/exercises/barbell-holds',
		video: 'https://www.youtube.com/embed/IyUnIuQ8t1I'
	},
	{
		longName: 'Hex Dumbbell Hold',
		shortName: 'Grip',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell' ],
		note: 'hold by the heads',
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/hex-dumbbell-hold',
		video: 'http://content.jwplatform.com/players/LriGQsbi-EPvWYbKj.html'
	},
	{
		longName: "Farmer's Walk",
		shortName: 'Grip',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Dumbbell', 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/farmers-walk',
		video: 'http://content.jwplatform.com/players/BgJZJLSt-EPvWYbKj.html'
	},
	{
		longName: 'Plate Pinch Curl',
		shortName: 'Grip',
		primaryMuscleGroup: 'Forearms',
		generalMuscleGroup: 'Arms',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/arm-exercises/videos/plate-pinch-curl',
		video: 'http://content.jwplatform.com/players/NFsPdrO5-JGzcmSrv.html'
	},
	{
		longName: 'Body-Weight Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/bodyweight-squat',
		video: 'http://content.jwplatform.com/players/NxN7oBKr-EPvWYbKj.html'
	},
	{
		longName: 'Body-Weight Wall Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/bodyweight-wall-squat',
		video: 'http://content.jwplatform.com/players/LHyjmfNR-EPvWYbKj.html'
	},
	{
		longName: 'Jump Squat',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/bodyweight-jump-squat',
		video: 'http://content.jwplatform.com/players/nTavWpcj-EPvWYbKj.html'
	},
	{
		longName: 'Iso-Explosive Jump Squat',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		note: 'Pause for 5 seconds at the bottom of the squat',
		site:
			'https://www.muscleandfitness.com/workouts/leg-exercises/videos/isometric-explosive-bodyweight-jump-squat',
		video: 'https://www.youtube.com/embed/HTS8Ti7tB0I'
	},
	{
		longName: 'Braced Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		note: 'Holding weight with arms extending in front of body',
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/braced-squat',
		video: 'https://www.youtube.com/embed/OUZpL7miFT4'
	},
	{
		longName: 'Box Jump',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/high-box-jump',
		video: 'http://content.jwplatform.com/players/sMJKnmNJ-EPvWYbKj.html'
	},
	{
		longName: 'Depth Jump',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		note: 'Drop from a box, when feet hit the ground, immediately jump as high as possible',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/depth-jump',
		video: 'http://content.jwplatform.com/players/RdHwUjyp-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Squat',
		shortName: 'Single-Leg Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		note: 'Standing on something about knee height',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/elevated-single-leg-squat',
		video: 'http://content.jwplatform.com/players/I2VafE9K-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Squat Bench Getup',
		shortName: 'Single-Leg Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		note: 'Squat until butt hits bench',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-bench-squat',
		video: 'http://content.jwplatform.com/players/lv2BgmzB-EPvWYbKj.html'
	},
	{
		longName: 'Pistol Squat',
		shortName: 'Single-Leg Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/pistol-squat',
		video: 'http://content.jwplatform.com/players/EqT7mVRc-JGzcmSrv.html'
	},
	{
		longName: 'Barbell Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/back-squat',
		video: 'http://content.jwplatform.com/players/WBTXfdJ0-EPvWYbKj.html'
	},
	{
		longName: 'Wide-Stance Barbell Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/wide-stance-barbell-squat',
		video: 'http://content.jwplatform.com/players/lWxFxWIB-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Front Squat',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-front-squat',
		video: 'http://content.jwplatform.com/players/bYBAmGve-E1EucFxD.html'
	},
	{
		longName: 'Barbell Squat with Heels Raised',
		shortName: 'Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate' ],
		note: 'Standing so that heels are on plates',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-squat-heels-raised',
		video: 'http://content.jwplatform.com/players/BifnWoL9-EPvWYbKj.html'
	},
	{
		longName: 'Barbell Jump Squat',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-jump-squat',
		video: 'http://content.jwplatform.com/players/aHsKhJrX-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-squat',
		video: 'http://content.jwplatform.com/players/VgNVMo5y-EPvWYbKj.html'
	},
	{
		longName: 'Goblet Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/goblet-squat',
		video: 'http://content.jwplatform.com/players/LQxLhNGT-EPvWYbKj.html'
	},
	{
		longName: 'Sumo Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/sumo-squat',
		video: 'http://content.jwplatform.com/players/o47leOuT-EPvWYbKj.html'
	},
	{
		longName: 'Sumo Squat Swing',
		shortName: 'Kettlebell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/sumo-squat-swing',
		video: 'http://content.jwplatform.com/players/SZi562oE-EPvWYbKj.html'
	},
	{
		longName: 'Wide-Stance Goblet Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/wide-stance-goblet-squat',
		video: 'http://content.jwplatform.com/players/JeEdJhhd-EPvWYbKj.html'
	},
	{
		longName: 'Dumbbell Front Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-front-squat',
		video: 'http://content.jwplatform.com/players/g2FfKyl9-E1EucFxD.html'
	},
	{
		longName: 'Dumbbell Jump Squat',
		shortName: 'Jump',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-jump-squat',
		video: 'http://content.jwplatform.com/players/DQJ00vwS-EPvWYbKj.html'
	},
	{
		longName: 'Overhead Dumbbell Squat',
		shortName: 'Dumbbell Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/overhead-dumbbell-squat',
		video: 'http://content.jwplatform.com/players/21tjAIdQ-EPvWYbKj.html'
	},
	{
		longName: 'Barbell or Dumbbell Split Squat',
		shortName: 'Split Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-split-squat',
		video: 'http://content.jwplatform.com/players/La3iekVJ-EPvWYbKj.html'
	},
	{
		longName: 'Elevated Front Foot Barbell or Dumbbell Split Squat',
		shortName: 'Split Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		note: 'elevated on a step or couple plates',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/elevated-front-foot-barbell-split-squat',
		video: 'http://content.jwplatform.com/players/jXs6z6oT-EPvWYbKj.html'
	},
	{
		longName: 'Elevated Back Foot Barbell or Dumbbell Split Squat',
		shortName: 'Split Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		note: 'elevated on a step or couple plates',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/back-foot-elevated-dumbbell-split-squat',
		video: 'http://content.jwplatform.com/players/3EZwv6wT-EPvWYbKj.html'
	},
	{
		longName: 'Bulgarian Split Squat',
		shortName: 'Split Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		note: 'Back foot is elevated on a bench',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-bulgarian-split-squat',
		video: 'http://content.jwplatform.com/players/Z4HghZ3O-JGzcmSrv.html'
	},
	{
		longName: 'Split Squat Jump',
		shortName: 'Split Squat',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Bodyweight' ],
		site: 'https://fit-pro.com/article-4186-Split-squat-jump.html',
		video: 'https://www.youtube.com/embed/i7i1s3ua9qU'
	},
	{
		longName: 'Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-lunge',
		video: 'http://content.jwplatform.com/players/QfHRN4bm-JGzcmSrv.html'
	},
	{
		longName: 'Alternating Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/alternating-dumbbell-lunge',
		video: 'http://content.jwplatform.com/players/GzP1wFxH-EPvWYbKj.html'
	},
	{
		longName: 'Walking Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.healthline.com/health/exercise-fitness/walking-lunges#variations',
		video: 'https://www.youtube.com/embed/pn753HyEVEw'
	},
	{
		longName: 'Reverse Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-reverse-lunge',
		video: 'http://content.jwplatform.com/players/brf90sbW-EPvWYbKj.html'
	},
	{
		longName: 'Box Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-box-lunge',
		video: 'http://content.jwplatform.com/players/c8RY4uq3-EPvWYbKj.html'
	},
	{
		longName: 'Reverse Box Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/reverse-dumbbell-box-lunge',
		video: 'http://content.jwplatform.com/players/AAchJXNW-EPvWYbKj.html'
	},
	{
		longName: 'Curtsy Lunge',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/curtsy-tap',
		video: 'https://www.youtube.com/embed/wzHjHs6jlIA'
	},
	{
		longName: 'Side Lunges',
		shortName: 'Lunges',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate', 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-side-lunge',
		video: 'http://content.jwplatform.com/players/GuPjUbb5-EPvWYbKj.html'
	},
	{
		longName: 'Standing Cable Hip Adduction',
		shortName: 'Hip Adduction',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Cable' ],
		note:
			'Ankle strap attached to right foot, without bending knee, pull right leg sideways so that it crosses in front of left leg',
		site: 'https://weighttraining.guide/exercises/cable-hip-adduction/',
		video: 'https://www.youtube.com/embed/cZICrFnMBq0'
	},
	{
		longName: 'Slide Hip Adduction',
		shortName: 'Hip Adduction',
		primaryMuscleGroup: 'Quads',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		note: 'Kneel on floor with knees on sliders, push knees out as far as you can, then pull knees back together ',
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/sliding-hip-adduction',
		video: 'https://www.youtube.com/embed/NJlgovzbOLg'
	},
	{
		longName: 'Standing Calf Raise',
		shortName: 'Calves Standing',
		primaryMuscleGroup: 'Calves',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate' ],
		note: 'Balls of feet on a plate so slightly elevated',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/standing-calf-raise',
		video: 'http://content.jwplatform.com/players/5TYrcDg2-E1EucFxD.html'
	},
	{
		longName: 'Single-Leg Standing Calf Raise',
		shortName: 'Calves Standing',
		primaryMuscleGroup: 'Calves',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-standing-dumbbell-calf-raise',
		video: 'http://content.jwplatform.com/players/WkcREc80-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Bent Knee Calf Raise',
		shortName: 'Calves Knee Bent',
		primaryMuscleGroup: 'Calves',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-donkey-calf-raise',
		video: 'http://content.jwplatform.com/players/0EvZqriH-EPvWYbKj.html'
	},
	{
		longName: "Farmer's Walk on Toes",
		shortName: "Farmer's Walk",
		primaryMuscleGroup: 'Calves',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/farmers-walk-toes',
		video: 'http://content.jwplatform.com/players/X7Prws5v-EPvWYbKj.html'
	},
	{
		longName: 'Hip Raises',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/hip-raise',
		video: 'http://content.jwplatform.com/players/4ngWu3WA-EPvWYbKj.html'
	},
	{
		longName: 'Weighted Hip Raises',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-hip-thrust-bench',
		video: 'http://content.jwplatform.com/players/EgwrpfKD-JGzcmSrv.html'
	},
	{
		longName: 'Hip Raise with Med Ball Knee Squeeze',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/hip-raise-knee-squeeze',
		video: 'http://content.jwplatform.com/players/h15CTWHJ-EPvWYbKj.html'
	},
	{
		longName: 'Marching Hip Raises',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/marching-hip-raise',
		video: 'http://content.jwplatform.com/players/9BFsWqZs-EPvWYbKj.html'
	},
	{
		longName: 'Hip Raises with Feet on Swiss Ball',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/hip-raise-feet-swiss-ball',
		video: 'http://content.jwplatform.com/players/kp1ht9zF-EPvWYbKj.html'
	},
	{
		longName: 'Marching Hip Raises with Feet on Swiss Ball',
		shortName: 'Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/marching-hip-raise-feet-swiss-ball',
		video: 'http://content.jwplatform.com/players/0Qxt1xNI-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Hip Raises',
		shortName: 'Single-Leg Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-hip-raise',
		video: 'http://content.jwplatform.com/players/gkDBTo77-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Hip Raises with Knee Hold',
		shortName: 'Single-Leg Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-hip-raise-knee-hold',
		video: 'http://content.jwplatform.com/players/Phg30BS2-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Hip Raises with one Foot on Foam Roller',
		shortName: 'Single-Leg Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-hip-raise-foot-foam-roller',
		video: 'http://content.jwplatform.com/players/JeXKZXbR-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Hip Raises with Foot on a Medicine Ball',
		shortName: 'Single-Leg Hip Raises',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-hip-raise-foot-medicine-ball',
		video: 'http://content.jwplatform.com/players/SXl3S4Zd-EPvWYbKj.html'
	},
	{
		longName: 'Leg Curl with Swiss-Ball or Sliders with Hips Raised',
		shortName: 'Leg Curl',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Swiss Ball' ],
		note: 'Feet normal',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/swiss-ball-hip-raise-and-leg-curl',
		video: 'http://content.jwplatform.com/players/DcS6qq0I-EPvWYbKj.html'
	},
	{
		longName: 'Leg Curl with Swiss-Ball or Sliders with Hips Raised',
		shortName: 'Leg Curl',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Swiss Ball' ],
		note: 'Toes pointed out',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/swiss-ball-hip-raise-and-leg-curl',
		video: 'http://content.jwplatform.com/players/DcS6qq0I-EPvWYbKj.html'
	},
	{
		longName: 'Leg Curl with Swiss-Ball or Sliders with Hips Raised',
		shortName: 'Leg Curl',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Swiss Ball' ],
		note: 'Toes pointed in',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/swiss-ball-hip-raise-and-leg-curl',
		video: 'http://content.jwplatform.com/players/DcS6qq0I-EPvWYbKj.html'
	},
	{
		longName: 'Barbell or Dumbbell Bent-Knee Deadlift',
		shortName: 'Bent-Knee Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-deadlift',
		video: 'http://content.jwplatform.com/players/zAH6BItZ-EPvWYbKj.html'
	},
	{
		longName: 'Wide-Grip Barbell or Dumbbell Bent-Knee Deadlift',
		shortName: 'Bent-Knee Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/wide-grip-barbell-deadlift',
		video: 'http://content.jwplatform.com/players/YBwm8qwS-JGzcmSrv.html'
	},
	{
		longName: 'Single-Leg Barbell or Dumbbell Bent-Knee Deadlift',
		shortName: 'Bent-Knee Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-barbell-deadlift',
		video: 'http://content.jwplatform.com/players/OXEfFDsR-EPvWYbKj.html'
	},
	{
		longName: 'Sumo Bent-Knee Deadlift',
		shortName: 'Bent-Knee Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/sumo-deadlift',
		video: 'http://content.jwplatform.com/players/bJ7z2Qzy-EPvWYbKj.html'
	},
	{
		longName: 'Barbell or Dumbbell Straight-Leg Deadlift',
		shortName: 'Straight-Leg Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-straight-leg-deadlift',
		video: 'http://content.jwplatform.com/players/FHLqcEr8-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Barbell or Dumbbell Straight-Leg Deadlift',
		shortName: 'Straight-Leg Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-barbell-straight-leg-deadlift',
		video: 'http://content.jwplatform.com/players/ONQCAK9L-EPvWYbKj.html'
	},
	{
		longName: 'Cable Pull Through',
		shortName: 'Straight-Leg Deadlift',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/cable-pull-through',
		video: 'http://content.jwplatform.com/players/gnC2T7h9-EPvWYbKj.html'
	},
	{
		longName: 'Kettlebell or Single Dumbbell Swings',
		shortName: 'Kettlebell Swing',
		primaryMuscleGroup: 'Hamstrings',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Kettlebell', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/kettlebell-swing',
		video: 'http://content.jwplatform.com/players/BVtzOQfx-JGzcmSrv.html'
	},
	{
		longName: 'Stepups',
		shortName: 'Stepup',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-step',
		video: 'http://content.jwplatform.com/players/lcDybAPy-E1EucFxD.html'
	},
	{
		longName: 'Lateral Stepups',
		shortName: 'Stepup',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/lateral-dumbbell-step',
		video: 'http://content.jwplatform.com/players/Yxbeforx-EPvWYbKj.html'
	},
	{
		longName: 'Crossover Stepups',
		shortName: 'Stepup',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/crossover-dumbbell-step',
		video: 'http://content.jwplatform.com/players/kvtSXp4h-EPvWYbKj.html'
	},
	{
		longName: 'Skater Hops',
		shortName: 'Skater Hop',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/training/workout-routines/ice-skater-hop',
		video: 'https://www.youtube.com/embed/EEFDTlkjJKM'
	},
	{
		longName: 'Standing Cable or Resistance Band Hip Abduction',
		shortName: 'Hip Abduction',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/standing-cable-hip-abduction',
		video: 'http://content.jwplatform.com/players/WwDr0SgX-EPvWYbKj.html'
	},
	{
		longName: 'Lateral Band Walks',
		shortName: 'Hip Abduction',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandstrength.com/exercises/lateral-band-walk',
		video: 'https://www.youtube.com/embed/II_T0eJjGLA'
	},
	{
		longName: 'Forward Walk with Band at Knees',
		shortName: 'Hip Abduction',
		primaryMuscleGroup: 'Glutes',
		generalMuscleGroup: 'Lower Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/forward-walk-band-knees',
		video: 'http://content.jwplatform.com/players/GrzfVxPn-EPvWYbKj.html'
	},
	{
		longName: 'Plank',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/general-plank',
		video: 'http://content.jwplatform.com/players/56HQMcrD-E1EucFxD.html'
	},
	{
		longName: 'Elevated-Feet Plank',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/elevated-feet-plank',
		video: 'http://content.jwplatform.com/players/rDKzfU7x-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Elevated Plank',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/single-leg-elevated-feet-plank',
		video: 'http://content.jwplatform.com/players/k93FxcYS-EPvWYbKj.html'
	},
	{
		longName: 'Arms Extended In Front Of Body Plank',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/extended-plank',
		video: 'http://content.jwplatform.com/players/hzs4NdbS-JGzcmSrv.html'
	},
	{
		longName: 'Plank with Single Arm Lifts',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/plank-arm-raise',
		video: 'http://content.jwplatform.com/players/f1U9jJ5H-EPvWYbKj.html'
	},
	{
		longName: 'Straight-Arm Plank with Shoulder Taps',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/straight-arm-plank-shoulder-touch',
		video: 'https://www.youtube.com/embed/iKVVi6OYNOY'
	},
	{
		longName: 'Plank with Leg Lift',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/plank-leg-lift',
		video: 'http://content.jwplatform.com/players/Vgx1yDJq-EPvWYbKj.html'
	},
	{
		longName: 'Plank with Opposite Arm and Opposite Leg Lifts',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site:
			'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/wide-stance-plank-opposite-arm-and-leg-lift',
		video: 'http://content.jwplatform.com/players/CX5BsvHv-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Plank',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-plank',
		video: 'http://content.jwplatform.com/players/I4q8zyFx-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Plank with Feet Elevated on Bench',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-plank-feet-bench',
		video: 'http://content.jwplatform.com/players/08hZZxci-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Stir the Pot',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandstrength.com/exercises/stir-the-pot-on-exercise-ball',
		video: 'https://www.youtube.com/embed/3h8_DwH061Q'
	},
	{
		longName: 'Bird Dog',
		shortName: 'Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/training/build-muscle/bird-dog',
		video: 'https://www.youtube.com/embed/wiFNA3sqjCA'
	},
	{
		longName: 'Side Plank',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/general-side-plank',
		video: 'http://content.jwplatform.com/players/tUemeFZ8-EPvWYbKj.html'
	},
	{
		longName: 'Side Plank with Feet Elevated on Bench',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/side-plank-feet-bench',
		video: 'http://content.jwplatform.com/players/wgyOrpPQ-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Side Plank',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-side-plank',
		video: '<http://content.jwplatform.com/players/Ra00RwOV-EPvWYbKj.html'
	},
	{
		longName: 'Side Plank with Leg Lift',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/side-plank-leg-lift',
		video: 'http://content.jwplatform.com/players/7zN2XTTu-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Side Plank',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-leg-side-plank',
		video: 'http://content.jwplatform.com/players/jwtFoE8p-EPvWYbKj.html'
	},
	{
		longName: 'Side Plank with Knee Tuck',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/side-plank-knee-tuck',
		video: 'http://content.jwplatform.com/players/Uxhc06e6-EPvWYbKj.html'
	},
	{
		longName: 'Side Plank with Reach Under',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/side-plank-reach-under',
		video: 'http://content.jwplatform.com/players/MydPzFAT-EPvWYbKj.html'
	},
	{
		longName: 'T-Stabilization Side Plank',
		shortName: 'Side Plank',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/t-stabilization',
		video: 'http://content.jwplatform.com/players/4OwVkHUI-EPvWYbKj.html'
	},
	{
		longName: 'Mountain Climbers',
		shortName: 'Mountain Climbers',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/mountain-climber',
		video: 'http://content.jwplatform.com/players/TyXperv5-JGzcmSrv.html'
	},
	{
		longName: 'Mountain Climbers with Hands on Med Ball or Swiss Ball',
		shortName: 'Mountain Climbers',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Medicine Ball', 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/medicine-ball-mountain-climber',
		video: 'http://content.jwplatform.com/players/p19ekpZ3-EPvWYbKj.html'
	},
	{
		longName: 'Cross-Body Mountain Climbers',
		shortName: 'Mountain Climbers',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/cross-body-mountain-climber',
		video: 'http://content.jwplatform.com/players/WFfTw6bU-EPvWYbKj.html'
	},
	{
		longName: 'Cross-Body Mountain Climbers with Hands or Feet on Swiss-Ball',
		shortName: 'Mountain Climbers',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site:
			'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/mountain-climber-hands-swiss-ball',
		video: 'http://content.jwplatform.com/players/BRA4SHhP-c3hsSMRd.html'
	},
	{
		longName: 'Swiss Ball Jackknife',
		shortName: 'Jackknife',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-jackknife',
		video: 'http://content.jwplatform.com/players/33K0LLjJ-EPvWYbKj.html'
	},
	{
		longName: 'Single-Leg Swiss Ball Jackknife',
		shortName: 'Jackknife',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/single-leg-swiss-ball-jackknife',
		video: 'http://content.jwplatform.com/players/r8ff89fU-EPvWYbKj.html'
	},
	{
		longName: 'Ab Wheel Rollout',
		shortName: 'Rollout',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Barbell/Plate', 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/kneeling-ab-wheel',
		video: 'http://content.jwplatform.com/players/TvrWgC9t-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Plank Body Saw',
		shortName: 'Rollout',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.liveleantv.com/how-to-do-a-swiss-ball-body-saw/',
		video: 'https://www.youtube.com/embed/xRZfJvokaoo'
	},
	{
		longName: 'Prone Cobra',
		shortName: 'Ab Stability',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/full-body-exercises/videos/prone-cobra',
		video: 'https://www.youtube.com/embed/hcTILl3cVkQ'
	},
	{
		longName: 'Cable Core Press',
		shortName: 'Ab Stability',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/cable-core-press',
		video: 'http://content.jwplatform.com/players/UNhtdQm0-EPvWYbKj.html'
	},
	{
		longName: 'Stability Chop',
		shortName: 'Chop',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Cable' ],
		note: 'Kneeling, Half-Kneeling (inside knee on floor), or Standing',
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/half-kneeling-stability-chop',
		video: 'http://content.jwplatform.com/players/B8YeCarG-EPvWYbKj.html'
	},
	{
		longName: 'Stability Reverse Chop',
		shortName: 'Chop',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Cable' ],
		note: 'Kneeling, Half-Kneeling (inside knee on floor), or Standing',
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/kneeling-stability-reverse-chop',
		video: 'http://content.jwplatform.com/players/I3Roqvx3-EPvWYbKj.html'
	},
	{
		longName: 'Russian Twist',
		shortName: 'Russian Twist',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/russian-twist',
		video: 'http://content.jwplatform.com/players/jThNlstn-EPvWYbKj.html'
	},
	{
		longName: 'Feet-Elevated Russian Twist',
		shortName: 'Russian Twist',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/elevated-feet-russian-twist',
		video: 'http://content.jwplatform.com/players/p7XC2qgC-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Russian Twist',
		shortName: 'Russian Twist',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-russian-twist',
		video: 'http://content.jwplatform.com/players/zhnJzZyy-EPvWYbKj.html'
	},
	{
		longName: 'Hip Crossover',
		shortName: 'Ab Rotation',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		note: 'Knees 90 degrees',
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/hip-crossover',
		video: 'http://content.jwplatform.com/players/uDRUyfv2-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Hip Crossover',
		shortName: 'Ab Rotation',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-hip-crossover',
		video: 'http://content.jwplatform.com/players/CEVIXR6P-EPvWYbKj.html'
	},
	{
		longName: 'Medicine Ball Side Throw',
		shortName: 'Ab Rotation',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Medicine Ball ' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/medicine-ball-side-throw',
		video: 'http://content.jwplatform.com/players/8QjFeuNX-EPvWYbKj.html'
	},
	{
		longName: 'Crunch',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/crunch',
		video: 'http://content.jwplatform.com/players/hoNDA0B2-E1EucFxD.html'
	},
	{
		longName: 'Bicycle Crunch',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/bicycle-crunch',
		video: 'http://content.jwplatform.com/players/65rIPRcx-JGzcmSrv.html'
	},
	{
		longName: 'Toe Touches',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/toe-touch',
		video: 'https://www.youtube.com/embed/eazQpjRjy2U'
	},
	{
		longName: 'V-Up',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/v',
		video: 'http://content.jwplatform.com/players/zaiZUwVX-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Crunch',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-crunch',
		video: 'http://content.jwplatform.com/players/tuZrhx4p-EPvWYbKj.html'
	},
	{
		longName: 'Standing or Kneeling Cable Crunch',
		shortName: 'Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/standing-cable-crunch',
		video: 'http://content.jwplatform.com/players/mYdG4Nlc-EPvWYbKj.html'
	},
	{
		longName: 'Reverse Crunch',
		shortName: 'Reverse Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/reverse-crunch',
		video: 'http://content.jwplatform.com/players/HJiIKtCs-E1EucFxD.html'
	},
	{
		longName: 'Incline Reverse Crunch',
		shortName: 'Reverse Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/incline-reverse-crunch',
		video: 'http://content.jwplatform.com/players/YM4sT8ZW-EPvWYbKj.html'
	},
	{
		longName: 'Foam Roller Reverse Crunch',
		shortName: 'Reverse Crunch',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		note: 'pinching foam roll with hamstrings to hold foam-roller to butt',
		site:
			'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/foam-roller-reverse-crunch-dumbbell',
		video: 'http://content.jwplatform.com/players/zBhKvxJ6-EPvWYbKj.html'
	},
	{
		longName: 'Abs Lowering Legs Drill',
		shortName: 'Lower',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/leg-lowering-drill',
		video: 'http://content.jwplatform.com/players/zpH6DohX-EPvWYbKj.html'
	},
	{
		longName: 'Swiss Ball Pike',
		shortName: 'Lower',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-pike',
		video: 'http://content.jwplatform.com/players/yF3eeIn8-JGzcmSrv.html'
	},
	{
		longName: '6 Inches',
		shortName: 'Lower',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.skimble.com/exercises/18453-6-inches-how-to-do-exercise',
		video: 'https://www.youtube.com/embed/D8l8TlAPO2E'
	},
	{
		longName: 'Hanging Leg Raises',
		shortName: 'Hanging',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/hanging-leg-raise',
		video: 'http://content.jwplatform.com/players/ugfAYyd9-E1EucFxD.html'
	},
	{
		longName: 'Hanging Knee to Chest',
		shortName: 'Hanging',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/hanging-knee-raise',
		video: 'http://content.jwplatform.com/players/scTweO4A-EPvWYbKj.html'
	},
	{
		longName: 'Hanging Hurdle',
		shortName: 'Hanging',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		note: 'lifting knees over imaginary cone in middle',
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/hanging-hurdle',
		video: 'http://content.jwplatform.com/players/E43X6odA-c3hsSMRd.html'
	},
	{
		longName: 'Side Crunch w/wo Swiss Ball',
		shortName: 'Obliques',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Swiss Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/swiss-ball-side-crunch',
		video: 'http://content.jwplatform.com/players/V5dAM6Tk-EPvWYbKj.html'
	},
	{
		longName: 'Side Bend',
		shortName: 'Obliques',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Dumbbell', 'Cable' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/cable-side-bend',
		video: 'https://www.youtube.com/embed/dL9ZzqtQI5c'
	},
	{
		longName: 'Overhead Dumbbell Side Crunch',
		shortName: 'Obliques',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.msn.com/en-us/health/exercise/strength/overhead-dumbbell-side-bend/ss-BBtOcJj',
		video: 'https://www.youtube.com/embed/umPPTg5fYmA'
	},
	{
		longName: 'Penguin Touches',
		shortName: 'Obliques',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://workoutlabs.com/exercise-guide/alternate-heel-touchers/',
		video: 'https://www.youtube.com/embed/5t9jxhoyaIY'
	},
	{
		longName: 'Hollow Body Hold',
		shortName: 'Hollow Body',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/training/build-muscle/hollow-hold',
		video: 'https://www.youtube.com/embed/4xRpGgttca8'
	},
	{
		longName: 'Hollow Body Rocks',
		shortName: 'Hollow Body',
		primaryMuscleGroup: 'Abs',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.menshealth.com/fitness/a24184809/abs-workout-mens-health-fitness-director/',
		video: 'https://www.youtube.com/embed/p7j02V1fIzU'
	},
	{
		longName: 'Squat to Push Press / Thrusters with Dumbbells',
		shortName: 'SquatPress',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Barbell/Plate', 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/barbell-front-squat-push-press',
		video: 'http://content.jwplatform.com/players/VEZwMzfS-EPvWYbKj.html'
	},
	{
		longName: 'Deadlift to Row',
		shortName: 'DeadliftRow',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/workouts/back-exercises/videos/barbell-deadlift',
		video: 'https://www.youtube.com/embed/xa2jBYcC4m0'
	},
	{
		longName: 'Dumbbell Hammer Curl to Lunge to Press',
		shortName: 'CurlLungePress',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/dumbbell-hammer-curl-lunge-press',
		video: 'http://content.jwplatform.com/players/VqfBBpy8-EPvWYbKj.html'
	},
	{
		longName: 'Stepup and Press',
		shortName: 'StepupPress',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell', 'Kettlebell' ],
		note: 'opposite arm/ opposite leg',
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/single-arm-step-and-press',
		video: 'http://content.jwplatform.com/players/vYbiPAo7-EPvWYbKj.html'
	},
	{
		longName: 'Single-Arm Reverse Lunge Press',
		shortName: 'CurlLungePress',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell', 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/single-arm-reverse-lunge-and-press',
		video: 'http://content.jwplatform.com/players/ZwoBTCQa-EPvWYbKj.html'
	},
	{
		longName: 'Turkish Getup',
		shortName: 'Turkish Getup',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell', 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/turkish-getup',
		video: 'http://content.jwplatform.com/players/XpwYDTd9-EPvWYbKj.html'
	},
	{
		longName: 'Barbell or Dumbbell High Pull',
		shortName: 'High Pull',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell', 'Barbell/Plate' ],
		site: 'https://www.muscleandfitness.com/training/workout-routines/dumbbell-high-pull',
		video: 'https://www.youtube.com/embed/BJdROwz4qeQ'
	},
	{
		longName: 'Single-Arm Snatch',
		shortName: 'Snatch',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Dumbbell' ],
		site: 'https://www.muscleandfitness.com/workouts/shoulder-exercises/videos/single-arm-dumbbell-snatch',
		video: 'http://content.jwplatform.com/players/VBel3Nj0-EPvWYbKj.html'
	},
	{
		longName: 'Kettlebell Swing',
		shortName: 'Kettlebell Swing',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Kettlebell' ],
		site: 'https://www.muscleandfitness.com/workouts/leg-exercises/videos/kettlebell-swing',
		video: 'http://content.jwplatform.com/players/BVtzOQfx-JGzcmSrv.html'
	},
	{
		longName: 'Medicine Ball Slam',
		shortName: 'Med Ball Slam',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/medicine-ball-slam-0',
		video: 'https://www.youtube.com/embed/Rx_UHMnQljU'
	},
	{
		longName: 'Medicine Ball Slam to Sides',
		shortName: 'Med Ball Slam',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Medicine Ball' ],
		site: 'https://workoutlabs.com/exercise-guide/medicine-ball-side-slams/',
		video: 'https://www.youtube.com/embed/yVJ5y4JuHxA'
	},
	{
		longName: 'Burpees',
		shortName: 'Burpees',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight' ],
		site: 'https://www.muscleandfitness.com/videos/burpee',
		video: 'https://www.youtube.com/embed/dZgVxmf6jkA'
	},
	{
		longName: 'Battle Ropes',
		shortName: 'Battle Ropes',
		primaryMuscleGroup: 'Compound Exercises',
		generalMuscleGroup: 'Full Body',
		equipment: [ 'Bodyweight', 'Battle Ropes' ],
		site: 'https://www.menshealth.com/fitness/a19537513/how-to-use-battling-ropes/',
		video: 'https://www.youtube.com/embed/Qp32y0_s2H4'
	}
];

//TO-DO 10/4/19
//Then want to add functionality for generalMuscleGroups??
//	implment functionality for selection of more than 3 muscle groups? ->
//	then would try to evenly disperse exercises as much as possible but wouldn't be even number of exercises per muscle group

//need additional equipment? foam roller, slide board, battle ropes, bench (for stepping up)
//equipment values: Bodyweight, Dumbbell,Barbell/Plate,Swiss Ball,Medicine Ball,Bosu,Machines,Cable,TRX, Kettlebell

var muscleGroupInputs = document.querySelectorAll("input[name='muscleGroups']");
var workoutTypeInputs = document.querySelectorAll("input[name='workoutType']");
var equipmentInputs = document.querySelectorAll("input[name='Equipment']");

var generateWorkoutBtn = document.querySelector('#generateWorkoutBtn');
var resetBtn = document.querySelector('#resetButton');

init();

function init() {
	limitNumberOfMuscleGroups();
	toggleCheckboxColumn('Equipment');
}

//runs when "generate workout" button is clicked
//gathers info from selections and then creates a list of all potential exercises.
//then makes some checks to make sure that these selections can result in a valid workout with enough unique exercises
//if so, then randomly picks exercises that fit criteria and creates a list of exercises for the workout
var NUM_TOTAL_EXERCISES = 6;
function generateWorkout() {
	var workoutSelection = {};
	workoutSelection.muscleGroups = getSelectedInputs(muscleGroupInputs);
	workoutSelection.workoutType = getSelectedInputs(workoutTypeInputs);
	workoutSelection.equipment = getSelectedInputs(equipmentInputs);

	var muscleGroups = workoutSelection.muscleGroups;
	var numExercisesPerMG = NUM_TOTAL_EXERCISES / muscleGroups.length;
	//initial check to make sure valid selection parameters - atleast 1 musclegroup and equipment is selected
	if (validInitialSelections()) {
		var allExercisesGroupedBySelectedMG = createArrayOfMuscleGroupArrays(workoutSelection);
		//depending on the selected muscle groups, need to make sure there are enough unique exercises to create a list of workout exercises
		if (possibleToCreateSetOfExercisesForSelections(numExercisesPerMG, allExercisesGroupedBySelectedMG)) {
			document.querySelector('#workoutTextSection').classList.add('reverseColorScheme');
			var workoutExercises = createExercisesForWorkout(allExercisesGroupedBySelectedMG, numExercisesPerMG);
			workoutDisplayFormat(workoutSelection, workoutExercises);
			addRandomImgs();
		} else {
			console.log(
				'either numberOfExercisesPerMG isnt an integer (numTotExer / muscleGroups.length, or not enough unique exercises in each muscle group'
			);
			alert(
				'not possible to create workout (not enough unique exercises for selected muscle groups)- please select different criteria'
			);
		}
	}
}

function workoutDisplayFormat(workoutSelection, workoutExercises) {
	var htmlString = '';
	var type = workoutSelection.workoutType[0];
	var equipment = workoutSelection.equipment;
	htmlString +=
		'<p><strong>MuscleGroups:</strong> ' +
		workoutSelection.muscleGroups +
		'<br><strong>Type:</strong> ' +
		type +
		'<br><strong>Equipment:</strong> ' +
		equipment;
	('</p>');
	htmlString += '<p><span class="header">Workout</span></p>';
	var restTime = 0;
	var sets;
	var repRange;
	var directions = '';
	var workoutTextArea = document.querySelector('#workoutTextSection');
	switch (type) {
		case 'Circuit':
			// <ol><li> 1a </li><li> 1b </li><li> 1c </li><li> 1d </li></ol>
			workoutTextArea.classList.add('workoutTextList');
			directions =
				'<p>Directions: Complete the series of exercises in succession with minimal rest in between. Once all exercises are completed, rest for prescribed amount of time, then repeat.';
			directions +=
				' Note: click the name of the exercise for video instructions / more info (if the site is muscleandfitness.com then at the bottom of the page there are advanced variations or other similar exercises) </p>';
			var setRestTime = Math.floor(Math.random() * 2 + 1); //either 1 or 2 mins
			restTime = 0;
			sets = 1;
			repRange = [ 10, 12 ];
			htmlString += directions;
			htmlString += '<ol>';
			for (var i = 0; i < workoutExercises.length; i++) {
				var exercise = workoutExercises[i];
				htmlString += exerciseInfoAsHTML(exercise, sets, repRange, restTime);
			}
			htmlString += '</ol><p>Rest || ' + setRestTime + 'mins </p><p>Repeat circuit for 3 sets</p>';
			break;
		case 'Superset':
			// <ol><li>1a</li><li> 1b</li></ol>
			// <ol><li>2a </li><li> 2b</li></ol>
			workoutTextArea.classList.add('workoutTextList');
			directions =
				'<p>Directions: Complete one set of A and then B before resting. Repeat for all the prescribed sets before moving on to the next pair.';
			directions +=
				' Note: click the name of the exercise for video instructions / more info (if the site is muscleandfitness.com then at the bottom of the page there are advanced variations or other similar exercises) </p>';
			restTime = Math.floor(Math.random() * 2 + 1); //either 1 or 2 mins
			sets = 3;
			repRange = [ 8, 10 ];
			htmlString += directions;
			for (var pairNum = 0; pairNum < sets; pairNum++) {
				htmlString += '<ol>';
				var exercise1 = workoutExercises[pairNum * 2];
				htmlString += exerciseInfoAsHTML(exercise1, sets, repRange, 0);
				var exercise2 = workoutExercises[pairNum * 2 + 1];
				htmlString += exerciseInfoAsHTML(exercise2, sets, repRange, restTime);
				htmlString += '</ol>';
			}
			break;
		case 'RegularLight':
			// <ol><li> 1</li><li> 2 </li></ol> - normal ordered list
			workoutTextArea.classList.remove('workoutTextList');
			directions =
				"<p>Directions: Complete each exercise and wait to complete its next set until alloted rest time has passed (if there's a lot of rest time in between, feel free to do a set of the next exercise in between to speed up workout)";
			directions +=
				' Note: click the name of the exercise for video instructions / more info (if the site is muscleandfitness.com then at the bottom of the page there are advanced variations or other similar exercises) </p>';
			restTime = Math.floor(Math.random() * 2 + 1); //either 1 or 2 mins
			sets = Math.floor(Math.random() * 2 + 2); //either 2 or 3
			if (sets === 2 ? (repRange = [ 20, 0 ]) : (repRange = [ 15, 0 ])); ////if sets=2, then 20 reps, if sets=3 then do 15 reps
			htmlString += directions;
			htmlString += '<ol>';
			for (var i = 0; i < workoutExercises.length; i++) {
				var exercise = workoutExercises[i];
				htmlString += exerciseInfoAsHTML(exercise, sets, repRange, restTime);
			}
			htmlString += '</ol>';
			break;
		case 'RegularMedium':
			// <ol><li> 1</li><li> 2 </li></ol> - normal ordered list
			workoutTextArea.classList.remove('workoutTextList');
			directions =
				"<p>Directions: Complete each exercise and wait to complete its next set until alloted rest time has passed (if there's a lot of rest time in between, feel free to do a set of the next exercise in between to speed up workout)";
			directions +=
				' Note: click the name of the exercise for video instructions / more info (if the site is muscleandfitness.com then at the bottom of the page there are advanced variations or other similar exercises) </p>';
			restTime = Math.floor(Math.random() * 2 + 1); //either 1 or 2 mins
			sets = Math.floor(Math.random() * 2 + 3); //either 3 or 4
			repRange = [ 8, 12 ];
			htmlString += directions;
			htmlString += '<ol>';
			for (var i = 0; i < workoutExercises.length; i++) {
				var exercise = workoutExercises[i];
				htmlString += exerciseInfoAsHTML(exercise, sets, repRange, restTime);
			}
			htmlString += '</ol>';
			break;
		case 'RegularHeavy':
			// <ol><li> 1</li><li> 2 </li></ol> - normal ordered list
			workoutTextArea.classList.remove('workoutTextList');
			directions =
				"<p>Directions: Complete each exercise and wait to complete its next set until alloted rest time has passed (if there's a lot of rest time in between, feel free to do a set of the next exercise in between to speed up workout)";
			directions +=
				' Note: click the name of the exercise for video instructions / more info (if the site is muscleandfitness.com then at the bottom of the page there are advanced variations or other similar exercises) </p>';
			restTime = Math.floor(Math.random() * 2 + 3); //either 3 or 4 mins
			sets = 5;
			repRange = [ 5, 0 ];
			htmlString += directions;
			htmlString += '<ol>';
			for (var i = 0; i < workoutExercises.length; i++) {
				var exercise = workoutExercises[i];
				htmlString += exerciseInfoAsHTML(exercise, sets, repRange, restTime);
			}
			htmlString += '</ol>';
			break;
		default:
			alert("This shouldn't happen - bad workoutType");
	}
	workoutTextArea.innerHTML = htmlString;
}

//create a string that has info for the inputted exercise written in html
function exerciseInfoAsHTML(exercise, sets, repRange, restTime) {
	var exerciseHtmlString = '';
	var name = exercise.longName;
	var mg = exercise.primaryMuscleGroup;
	var video = exercise.video;
	var link = exercise.site;
	// exerciseHtmlString +=
	// 	'<li><span><strong>' +
	// 	name +
	// 	'</strong> (' +
	// 	mg +
	// 	') || sets= ' +
	// 	sets +
	// 	' || reps= ' +
	// 	repRangeString(repRange) +
	// 	' || rest= ' +
	// 	restTime +
	// 	'mins';
	exerciseHtmlString +=
		'<li><span>' +
		`<a href=#exampleModal data-toggle="modal" onclick="changeModal('${name}','${video}','${link}')">` +
		name +
		'</a>' +
		' (' +
		mg +
		') || sets= ' +
		sets +
		' || reps= ' +
		repRangeString(repRange) +
		' || rest= ' +
		restTime +
		'mins';
	if (exercise.note) {
		exerciseHtmlString += ' || note: ' + exercise.note;
	}
	exerciseHtmlString += '</span></li>';
	return exerciseHtmlString;
}

function changeModal(exerciseName, video, link) {
	document.querySelector('#modalHeaderTitle').textContent = exerciseName;
	document.querySelector('#video').src = video;
	document.querySelector('#link').textContent = exerciseName;
	document.querySelector('#link').href = link + '?html5=1';
}

var localImgs = [
	'imgs/dontQuit.jpg',
	'imgs/futureSelf.jpg',
	'imgs/futureSelf2.jpg',
	'imgs/greatness-Watt.jpg',
	'imgs/howBadDoYouWantIt.jpg',
	'imgs/IWill.jpg',
	'imgs/limits-Brees.jpg',
	'imgs/makeItHappen-MJ.jpg',
	'imgs/onlyBadWorkoutIsOneThatNeverHappened.jpg',
	'imgs/sacrifice-Watt.jpg',
	'imgs/selfDiscipline-Rock.jpg',
	'imgs/success-Rock.jpg',
	'imgs/success-Watt.jpg',
	'imgs/success2-Rock.jpg',
	'imgs/success3-Rock.jpg'
];

//randomly selects images from the localImgs array above
function addRandomImgs() {
	var imgTags = document.querySelectorAll('img');
	var numOfLocalImgs = localImgs.length;
	var randomNumbers = [];
	while (randomNumbers.length < imgTags.length) {
		var rand = Math.floor(Math.random() * numOfLocalImgs);
		if (!randomNumbers.includes(rand)) randomNumbers.push(rand);
	}
	for (var i = 0; i < imgTags.length; i++) {
		imgTags[i].classList.remove('d-none');
		imgTags[i].src = localImgs[randomNumbers[i]];
	}
}

function repRangeString(repRange) {
	if (repRange[1] === 0) return '' + repRange[0];
	else return repRange[0] + '-' + repRange[1];
}

function createArrayOfMuscleGroupArrays(workoutSelection) {
	var exercisesThatFitSelectionCriteria = createListOfExercisesThatFitSelectionCriteria(workoutSelection); //array of all possible exercises that fit inputted criteria - muscle groups AND equipment

	var allExercisesGroupedBySelectedMuscleGroup = filterExercisesToGroupsByMuscleGroup(
		exercisesThatFitSelectionCriteria,
		workoutSelection.muscleGroups
	);
	return allExercisesGroupedBySelectedMuscleGroup;
}

//check to see if it's possible to create required number of unique exercises (some MuscleGroups only have a few unique exercises)
function possibleToCreateSetOfExercisesForSelections(numExercisesPerMG, allExercisesForEachSelectedMuscleGroup) {
	//if total number of exercises not divisible by number of muscle groups, then not valid selections
	if (!Number.isInteger(numExercisesPerMG)) return false;
	//loop through each of the arrays containing all exercises for a muscle group
	for (var i = 0; i < allExercisesForEachSelectedMuscleGroup.length; i++) {
		var allExerciseForMG = allExercisesForEachSelectedMuscleGroup[i];
		var listOfUniqueExercisesForMG = [];
		//loop through all exercises for a muscle group, if its shortname is unique (i.e not regular bench press and incline bench press), then add it to a list
		allExerciseForMG.forEach(function(exercise) {
			//if it's a unique exercise then add it to the list (only unique exercises will be added to the list)
			if (!listAlreadyContainsTypeOfExercise(listOfUniqueExercisesForMG, exercise))
				listOfUniqueExercisesForMG.push(exercise);
		});
		var numUnique = listOfUniqueExercisesForMG.length;
		//make sure that there are enough unique exercises in each muscle group for the workout
		if (numUnique < numExercisesPerMG) return false;
	}
	return true;
}

function createExercisesForWorkout(allExercisesForEachSelectedMuscleGroup, numberExercisesPerMuscleGroup) {
	var workoutExercises = [];
	var numTotalExercises = numberExercisesPerMuscleGroup * allExercisesForEachSelectedMuscleGroup.length;
	while (workoutExercises.length < numTotalExercises) {
		//array of arrays with randomly selected exercises for each muscle group (i.e. [chest1, chest2, chest3], [back1,back2,back3])
		var selectedWorkoutExsForEachMG = randomlySelectExercisesPerMuscleGroup(
			allExercisesForEachSelectedMuscleGroup,
			numberExercisesPerMuscleGroup
		);
		//loop through array of exercises in musclegroups so that exercises in workout alternate - i.e [chest1, back1, chest2, back2, chest3, back3]
		//first for loop is to keep track of which exercise we're on - exCountForEachMG (exerciseCounterForEachMG)
		for (var exCountForEachMG = 0; exCountForEachMG < numberExercisesPerMuscleGroup; exCountForEachMG++) {
			//second loop through each muscle group arr so that we only grab one exercise at a time from each MG
			for (var iForEachMG = 0; iForEachMG < selectedWorkoutExsForEachMG.length; iForEachMG++) {
				var muscleGroupArr = selectedWorkoutExsForEachMG[iForEachMG];
				var exercise = muscleGroupArr[exCountForEachMG];
				if (!listAlreadyContainsTypeOfExercise(workoutExercises, exercise)) workoutExercises.push(exercise);
				else
					alert(
						'very rare situation that 2 exercises are the same from differnt muscle group lists (i.e chin up (back), chin up (biceps)'
					);
			}
		}
		//if we have proper number of exercises in list (there were no problems with duplicates or anything) then we should be fine,
		//	if not then will loop again and first step re-randomly selects exercises from each muscleGroup
	}
	return workoutExercises;
}

//returns array of arrays with selected exercises for each muscle group (i.e. [[chest1, chest2, chest3], [back1,back2,back3]])
//goes through each array representing all exercises for a muscle group and randomly selects numberExercisesPerMuscleGroup UNIQUE exercises
function randomlySelectExercisesPerMuscleGroup(allExercisesForEachSelectedMuscleGroup, numberExercisesPerMuscleGroup) {
	var selectedExercisesForWorkoutForEachMuscleGroup = [];
	for (var i = 0; i < allExercisesForEachSelectedMuscleGroup.length; i++) {
		var allExercisesForMuscleGroup = allExercisesForEachSelectedMuscleGroup[i];
		var selectedExercisesForMuscleGroup = randomlySelectNumUniqueExercises(
			allExercisesForMuscleGroup,
			numberExercisesPerMuscleGroup
		);
		selectedExercisesForWorkoutForEachMuscleGroup.push(selectedExercisesForMuscleGroup);
	}
	return selectedExercisesForWorkoutForEachMuscleGroup;
}

//
function randomlySelectNumUniqueExercises(allExercisesForMuscleGroup, numberExercisesPerMuscleGroup) {
	var randomlySelectedExercises = [];
	var count = 0;
	while (randomlySelectedExercises.length < numberExercisesPerMuscleGroup) {
		var rand = Math.floor(Math.random() * allExercisesForMuscleGroup.length);
		var exercise = allExercisesForMuscleGroup[rand];
		//check if exercise is in randomlySelectedExercises
		if (!listAlreadyContainsTypeOfExercise(randomlySelectedExercises, exercise)) {
			//if it is not then push to list, if it is then do nothing (next time around will randomly pick a different one)
			randomlySelectedExercises.push(exercise);
		}
		count++;
		if (count > 10000) {
			alert('INFINITE LOOP - PROBLEM RANDOMLY SELECTING EXERCISES - this config is not valid');
			//send alert that this config (selected criteria) is not possible
			break;
		}
	}
	return randomlySelectedExercises;
}

//helper function for multiple functions that goes through a list to check to see if any have the same shortName as the inputted exercise
function listAlreadyContainsTypeOfExercise(listOfExercises, exercise) {
	for (var i = 0; i < listOfExercises.length; i++) {
		if (exercise.shortName === listOfExercises[i].shortName) return true;
	}
	return false;
}

//loop through all selected muscleGroups and create separate arrays of all potential exercises for each muscleGroup
//returns an array of arrays of exercises by selected muscle groups (i.e [[chest exercises],[back exercises]])
function filterExercisesToGroupsByMuscleGroup(potentialExercises, muscleGroups) {
	var exercisesForEachSelectedMuscleGroup = [];
	for (var i = 0; i < muscleGroups.length; i++) {
		var filteredExercisesForEachSelectedMuscleGroup = filterAllPotentialExercisesByMuscleGroup(
			potentialExercises,
			muscleGroups[i]
		);
		exercisesForEachSelectedMuscleGroup.push(filteredExercisesForEachSelectedMuscleGroup);
	}
	return exercisesForEachSelectedMuscleGroup;
}

//helper function for filterExercisesToGroupsByMuscleGroup - creates a list of only exercises of a certain muscleGroup
//exercises is an array of objects - all exercises that fit selected criteria
function filterAllPotentialExercisesByMuscleGroup(exercises, muscleGroup) {
	var filteredExercisesForMuscleGroup = [];
	for (var i = 0; i < exercises.length; i++) {
		var exercise = exercises[i];
		if (exercise.primaryMuscleGroup === muscleGroup) filteredExercisesForMuscleGroup.push(exercise);
	}
	return filteredExercisesForMuscleGroup;
}

//checks inputs to make sure they all have atleast one thing selected (checks separately to help narrow down the issue)
function validInitialSelections() {
	var check = false;
	var message = 'Not valid workout selections: need to have atleast 1 ';
	if (!anyOptionsSelected(muscleGroupInputs) && !anyOptionsSelected(equipmentInputs)) {
		alert(message + 'muscle group AND 1 equipment selected!');
	} else if (!anyOptionsSelected(muscleGroupInputs)) {
		alert(message + 'muscle group selected!');
	} else if (!anyOptionsSelected(equipmentInputs)) {
		alert(message + 'equipment selected!');
	} else if (!anyOptionsSelected(workoutTypeInputs)) {
		alert(message + 'workoutType selected!');
		console.log(
			"no workoutType selected, dont know how this happened - shouldn't be posssible because of radio buttons??"
		);
	} else {
		//no problems
		check = true;
	}
	return check;
}
//helper for validInitialSelections - if any of the inputs are checked then return true. if all empty then return false.
function anyOptionsSelected(inputs) {
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) return true;
	}
	return false;
}

function createListOfExercisesThatFitSelectionCriteria(workoutSelection) {
	//look through database and add exercises that fit criteria of selected inputs for muscle groups and equipment
	var exercisesThatFitCriteria = [];
	for (var i = 0; i < exercises.length; i++) {
		var exercise = exercises[i];
		//check if exercise works with the user's selected muscle groups AND equipment
		if (
			checkMatchingMuscleGroups(workoutSelection.muscleGroups, exercise) &&
			checkMatchingEquipment(workoutSelection.equipment, exercise)
		) {
			exercisesThatFitCriteria.push(exercise); //pushes the obj
		}
	}
	console.log('num of exercises that fit criteria: ' + exercisesThatFitCriteria.length);
	return exercisesThatFitCriteria;
}

//workoutCriteria is always an array of the inputs that were selected by the user (i.e ["chest","back"] or equipment array ["Bodyweight","Bench"])
//method ".includes" should only have one item as its parameter (shouldn't be an array or it won't work)
function checkIfInputMatchesExercise(workoutCriteria, exerciseAttribute) {
	//workoutCriteria is an array, but exerciseAttribute can only be one thing. returns true if exerciseAttribute is in workoutCriteria array
	if (workoutCriteria.includes(exerciseAttribute)) return true;
	else return false;
}

//check if inputted exercise's primary muscle group is one of the selected muscle groups for the workout
function checkMatchingMuscleGroups(selectedMuscleGroups, exercise) {
	return checkIfInputMatchesExercise(selectedMuscleGroups, exercise.primaryMuscleGroup);
}

//check if inputted exercise uses equipment that is one of the selected equipment for the workout
function checkMatchingEquipment(selectedEquipment, exercise) {
	var exercisePotentialEquipment = exercise.equipment; //each exercise has an array of multiple potential equipments that it can use (Bench press-> barbell or dumbbell)
	//workoutSelection.equipment is an array of all the equipment that the user selects
	for (var i = 0; i < exercisePotentialEquipment.length; i++) {
		if (checkIfInputMatchesExercise(selectedEquipment, exercisePotentialEquipment[i])) return true;
	}
	return false;
}

//inputOptions is actually all of the input[name='muscleGroups'], etc.
//adds whichever inputs are checked to an array
function getSelectedInputs(inputOptions) {
	var selectedInputs = [];
	for (var i = 0; i < inputOptions.length; i++) {
		if (inputOptions[i].checked) {
			selectedInputs.push(inputOptions[i].value);
		}
	}
	return selectedInputs;
}

//deselects all inputs (makes all the checkbox inputs checked=false), keeps the first option for the radio buttons selected
function resetInputs() {
	var inputs = document.querySelectorAll('input');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) inputs[i].checked = false;
	}
	//want to keep one of the radio buttons for the typeOfWorkout section to always be selected
	document.querySelector('#circuitInput').checked = true;
}

//add click listener to muscleGroup inputs that ensure a maximum of 3 muscle groups are selected
function limitNumberOfMuscleGroups() {
	var limit = 3;
	for (var i = 0; i < muscleGroupInputs.length; i++) {
		muscleGroupInputs[i].onclick = function() {
			var checkedCount = 0;
			for (var i = 0; i < muscleGroupInputs.length; i++) {
				checkedCount += muscleGroupInputs[i].checked ? 1 : 0;
			}
			if (checkedCount > limit) {
				alert('You can select maximum of ' + limit + ' muscle groups.');
				this.checked = false;
			}
		};
	}
}

//dont need this for MuscleGroups columns? if click the header name for muscle group it will select all of them - get rid of this because making it so you can only select max of 3
//checkboxInputClassName should be the class name of the group of checkboxes that are to be checked or de-checked
//idea is to click column header and it will toggle the checked attribute
//checks to see if any checkboxes are checked, if none are then will check all of them. If some are already checked then will uncheck all of them.
function toggleCheckboxColumn(checkboxInputClassName) {
	var toggleCheckboxes = false;
	var checkboxColInputs = document.querySelectorAll('.' + checkboxInputClassName);
	//check to see if any are checked? - if none are checked then toggleCheckboxes should be reset to true
	var count = 0;
	for (var i = 0; i < checkboxColInputs.length; i++) {
		if (checkboxColInputs[i].checked) count++;
	}
	if (count === 0) toggleCheckboxes = true;
	for (var i = 0; i < checkboxColInputs.length; i++) {
		if (toggleCheckboxes) checkboxColInputs[i].checked = true;
		else checkboxColInputs[i].checked = false;
	}
}
