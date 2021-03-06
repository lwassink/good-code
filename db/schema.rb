# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161108014326) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "programs", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "creator",         null: false
    t.string   "source_code_url"
    t.string   "image_url"
    t.text     "description",     null: false
    t.integer  "author_id",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "thumbnail_url"
    t.index ["author_id"], name: "index_programs_on_author_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "body",            null: false
    t.text     "project_used_in"
    t.integer  "author_id",       null: false
    t.integer  "program_id",      null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", using: :btree
    t.index ["program_id"], name: "index_reviews_on_program_id", using: :btree
  end

  create_table "statuses", force: :cascade do |t|
    t.string   "content",    null: false
    t.integer  "user_id",    null: false
    t.integer  "program_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_statuses_on_program_id", using: :btree
    t.index ["user_id"], name: "index_statuses_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
